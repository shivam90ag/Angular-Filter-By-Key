import { RouterModule, Routes } from '@angular/router';
import { RecordsModule } from './records/records.module';
import { RecordsComponent } from './records/records.component';

export const appRoutes:Routes =[
    {
        path:'',
        component: RecordsComponent
    }
]

export const AppRouting =RouterModule.forRoot(appRoutes, {
    useHash:false
})