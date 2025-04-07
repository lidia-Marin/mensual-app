import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export default class TaskFormComponent {
  private _formBuilder = inject(FormBuilder);
  private firestore = inject(Firestore);
  private storage = inject(Storage);

  form = this._formBuilder.group({
    fullName: this._formBuilder.control('', Validators.required),
    idNumber: this._formBuilder.control('', [Validators.required, Validators.pattern('^[0-9]{5,10}$')]),
    contact: this._formBuilder.control('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    paid: this._formBuilder.control(false, Validators.required),
    professor: this._formBuilder.control('', Validators.required), 
    schedule: this._formBuilder.control('', Validators.required), 
    paymentDate: this._formBuilder.control('', Validators.required),
    
  });

 

  async submit() {
    if (this.form.invalid) return;

    const formData = this.form.value;
    

    // Guardar los datos en Firestore
    try{
    const alumnosCollection = collection(this.firestore, 'alumnos');
    await addDoc(alumnosCollection, {
      fullName: formData.fullName,
      idNumber: formData.idNumber,
      contact: formData.contact,
      paid: formData.paid,
      professor: formData.professor,
      schedule: formData.schedule,
      paymentDate: formData.paymentDate,
      
    });
  
    toast.success('Alumno creado correctamente.')

    console.log('Alumno agregado con éxito');
    this.form.reset(); // Limpiar el formulario después de guardar
  } catch(error){
    console.error('Error al guardar el alumno:', error);
    toast.error('Error al guardar el alumno. Intenta nuevamente');

  }

  }
}
