//******************************attribute binding ************************************************* */

/*import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    columSpan: number = 2;
    pageHeader: string = 'Student Details';
    FirstName: string = 'Anurag';
    LastName: string = 'Mohanty';
    Branch: string = 'CSE';
    Mobile: number = 9876543210;
    Gender: string = 'Male';
    Age: number = 22;
}*/

//******************************************interpolation, and property binding *******************/
//** le data binding est utilisé pour lie les donne(composant) et interface utilisateur(httml) */
//l'interpolation angulaire est une technique qui permet à l'utilisateur de lier une valeur à un élément de l'interface utilisateur

/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
                <h1>{{pageHeader +' '+ schmidt}}</h1> 
                 <app-student> </app-student>  
                 <img [src] = 'ImagePath' />  <br/>
                 <span [innerHTML] = 'titre' ></span> <br/>
                 <button [disabled] = 'IsDisabledClick'> cliqez ici</button> <br/>
                 <input id='inputId' type='text' value='Anurag'>        
                </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageHeader: string = 'Student Details';
  title = 'mon-premier-projet';
  schmidt : string = 'je suis schmidt le boss des boss';
  ImagePath : string = "https://dotnettutorials.net/wp-content/uploads/2019/09/cropped-dotnettutorials.png";
  titre : string = "bienvenue dans ce tutoriel angular";
  IsDisabledClick : boolean = true;


}
*/

//*****************************************class binding ************************************* */

/*import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
 template: `<div>
                <button class='colorClass' [ngClass]='AddCSSClasses()'>Click Me</button>
              </div>`
})
export class AppComponent {
    ApplyBoldClass: boolean = true;
    ApplyItalicsClass: boolean = true;
    AddCSSClasses() {
        let Cssclasses = {
            boldClass: this.ApplyBoldClass,
            italicsClass: this.ApplyItalicsClass
        };
        return Cssclasses;
}*/

//*********************************style binding************************************* */

/*import { Component } from "@angular/core";
@Component({
  selector: 'app-root',
  template: `<div>
                <button style='color:red' [ngStyle]="AddCSSStyles()">Click Me </button>
              </div>`
})
export class AppComponent {
    IsBold: boolean = true;
    FontSize: number = 20;
    IsItalic: boolean = true;
    AddCSSStyles() {
        let CssStyles = {
            'font-weight': this.IsBold ? 'bold' : 'normal',
            'font-style': this.IsItalic ? 'italic' : 'normal',
            'font-size.px': this.FontSize
        };
        return CssStyles;
    }
}*/

//***************************event binding *************************************************** */

/*import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss']
})
export class AppComponent {
    ColumnSpan: number = 2;
    FirstName: string = 'Anurag';
    LastName: string = 'Mohanty';
    Branch: string = 'CSE';
    Mobile: number = 9876543210
    Gender: string = 'Male';
    Age: number = 20;
    
    ShowDetails: boolean = false;
    ToggleDetails(): void {
        this.ShowDetails = !this.ShowDetails;
    }
}*/

//*************************liaison bidirerctionnelle entre donnée et ui */

/*
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<div>
              Name : <input [(ngModel)]='Name'>
              <br>
              You entered : {{Name}}
            </div>`
})
export class AppComponent {
  Name: string = 'Anurag';
}*/

//*************************************le routage dans angular********************************* */
/*import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private router : Router){}
  GetStudent()
  {
      this.router.navigate(['/studentLink']);
  }
  GetStudentDetails()
  {
      this.router.navigate(['/studentdetailsLink']);
  }
}*/

import { Component} from '@angular/core';
import {Router} from '@angular/router';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [StudentService]
})
export class AppComponent {
    students: any[] | undefined;
    constructor(private _studentService: StudentService) { }
    ngOnInit() {
        this.students = this._studentService.getStudents();
  // nous pouvons utiliserr soit le constructeur sooit le ngOnUnit pour appeler la mzthode du service
  /*constructor(private _studentService: StudentService) {
    this.students = this._studentService.getStudents();
}*/

    
    }

}



