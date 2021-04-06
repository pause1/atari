import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HandlerComponent } from './handler/handler.component'
import { PapersComponent } from './papers/papers.component'
import { AppComponent } from './app.component';

const routes: Routes = [

    {
        path: '**', component: HandlerComponent, children: [
            { path: '**', component: PapersComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
