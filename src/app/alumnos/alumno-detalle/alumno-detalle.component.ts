import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, getDoc, updateDoc, arrayUnion } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-alumno-detalle',
  imports: [CommonModule],
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss']
})
export class AlumnoDetalleComponent implements OnInit {
  alumno: any = null;
  id: string | null = null;

  constructor(private route: ActivatedRoute, private firestore: Firestore) {}

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      const docRef = doc(this.firestore, 'alumnos', this.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.alumno = docSnap.data();
      }
    }
  }
  async marcarAsistencia() {
    if (!this.id) return;
    
    const docRef = doc(this.firestore, 'alumnos', this.id);
    try {
      await updateDoc(docRef, {
        asistencia: arrayUnion(new Date().toISOString()) // Guarda la fecha en formato ISO
      });
      console.log('Asistencia marcada correctamente');
    } catch (error) {
      console.error('Error al marcar asistencia:', error);
    }
  }
  enviarRecordatorio() {
    const numero = '573219234114';
    const mensaje = encodeURIComponent(
      `Hola 👋 recuerda que tu mensualidad ya está disponible para pago.
  
  Aquí tienes el QR para Nequi 📲:
  https://lidia-Marin.github.io/qr-mensual/qr.jpg
  
  ¡Gracias por entrenar con nosotros! 💪🏊`
    );
  
    const linkWhatsApp = `https://wa.me/${numero}?text=${mensaje}`;
    window.open(linkWhatsApp, '_blank');
  }
  

}
