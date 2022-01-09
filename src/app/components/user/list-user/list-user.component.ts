import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit, OnDestroy{

  private subs:Subscription=new Subscription();

  public search=new FormControl('');

  public data:any;
  public dataOriginal:any;

  constructor(private userSvc:UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }

  async getAllUsers(){

    this.subs=this.userSvc.getAllUsers().subscribe((data:any)=>{
      
      this.dataOriginal=data;
      this.data=this.dataOriginal;
      
      
    })

  }

  verDetalle(data:any){
    
    const dialogRef = this.dialog.open(DialogComponent,{


      width:'35%',
      height:'70%',
      maxHeight:'95%',
      maxWidth:'95%',
      autoFocus:false,
      panelClass:'custom-dialog-container',
      data:{

        user:data

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }

  buscar(dato:string){

    var result:any=[];

    if(dato.length<2){
      this.data=this.dataOriginal;
    }else{

      this.dataOriginal.map((data:any)=>{

        if(data.first_name.toLowerCase().indexOf(dato.toLowerCase())> -1 || data.last_name.toLowerCase().indexOf(dato.toLowerCase())> -1 || data.email.toLowerCase().indexOf(dato.toLowerCase())> -1){

            result.push(data);
          
        }

      })


      setTimeout(()=>{
        this.data=result;
  
        result = [];
      },500);

    }
    
  }

}
