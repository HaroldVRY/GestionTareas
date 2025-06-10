import { Component, Input, OnInit, TemplateRef, ViewChild  } from '@angular/core';
import { MenuElemento } from '../../../interface/core.interface';
import { MenuService } from '../../../service/menu.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  menuItems: MenuElemento[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
  }
}
