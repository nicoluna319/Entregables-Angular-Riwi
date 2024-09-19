import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any[] = [];
  selecteduser: any = null;
  newuser: any = { first_name: '', last_name: '', email: '' };
  showcreateform: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  viewCreateForm() {
    this.showcreateform = !this.showcreateform;
  }
  getUsers() {
    this.userService.getUsers().subscribe((response: any) => {
      this.users = response.data;
    });
  }

  createUser() {
    this.userService.createUser(this.newuser).subscribe({
      next: (createdUser) => {
        this.users.push(createdUser);  
        alert('Usuario creado con éxito');
        this.newuser = { first_name: '', last_name: '', email: '' };  
      },
      error: (error) => {
        alert('Error al crear el usuario');
        console.error('Error al crear el usuario', error);
      }
    });
  }
  

  editUser(user: any) {
    this.selecteduser = { ...user };
    
  }

  updateUser() {
    this.userService.updateUser(this.selecteduser).subscribe({
      next: (updatedUser) => {
        
        
        this.users = this.users.map(user => user.id === updatedUser.id ? updatedUser : user);
        alert('Usuario actualizado con éxito');
        this.selecteduser = null;  
      },
      error: (error) => {
        alert('Error al actualizar el usuario');
        console.error('Error al actualizar el usuario', error);
      }
    });
  }

  deleteUser(id: number) {
    const confirmed = confirm('¿Estás seguro de que deseas eliminar este usuario?');

    if(confirmed){
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.users = this.users.filter(user => user.id !== id) 
          alert('Usuario eliminado con éxito');
        },
        error: (error: any) => {
          alert('Error al eliminar el usuario');
          console.error('Error al eliminar el ususario', error);
        }
      });
    }
  } 
}
