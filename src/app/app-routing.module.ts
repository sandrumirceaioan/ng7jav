import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path:'', loadChildren: './publisher/publisher.module#PublisherModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{ useHash:false /*preloadingStrategy: PreloadAllModules*/ })],
    exports: [RouterModule ]
})
export class AppRoutingModule {}
