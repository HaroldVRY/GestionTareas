import { Component, Input, OnInit, TemplateRef, ViewChild  } from '@angular/core';
import { MenuElemento } from '../../../interface/core.interface';
import { MenuService } from '../../../service/menu.service';
import * as global from '../../../global';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  titulo = global.titulo;

  @Input()
  open: boolean = true;

  items: MenuElemento[] = [];
  iconTemplates: { [key: string]: TemplateRef<any> } = {};

  @ViewChild('iconInicio', { static: true }) iconInicio!: TemplateRef<any>;
  @ViewChild('iconHilo', { static: true }) iconHilo!: TemplateRef<any>;
  @ViewChild('iconCroco', { static: true }) iconCroco!: TemplateRef<any>;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.items = this.menuService.getMenuItems();

    this.iconTemplates = {
      iconInicio: this.iconInicio,
      iconHilo: this.iconHilo,
      iconCroco: this.iconCroco
    };
  }

}
