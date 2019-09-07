export class NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}
const navItems = [
   /* {
    displayName: 'Employees',
    iconName: 'recent_actors',
    route: 'employee',
    children: [
      {
        displayName: 'Employees list',
        iconName: 'group',
        route: 'employees',
      }
    ]
  },
  {
    displayName: 'Finances',
    iconName: 'bar_chart',
    route: 'finance',
    children: [
      {
        displayName: 'Reports',
        iconName: 'group',
        route: 'finances/reports'
      },
      {
        displayName: 'Invoices',
        iconName: 'group',
        route: 'finances/invoices'
      },
          {
              displayName: 'Sessions',
              iconName: 'speaker_notes',
              route: 'finance/sessions',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'material-design'
                },
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'star_rate',
                  route: 'what-up-web'
                },
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'become-angular-tailer'
                }
              ]
            },
            {
              displayName: 'Feedback',
              iconName: 'feedback',
              route: 'feedback'
            }
    ]
  },*/
  /**/  {
    displayName: 'Customers',
    iconName: 'assignment_ind',
    route: 'customers',
    children: [
      {
        displayName: 'Customers List',
        iconName: 'group',
        route: 'customers'
      }
    ]
  },
  {
    displayName: 'Suppliers',
    iconName: 'account_balance',
    route: 'suppliers',
    children: [
      {
        displayName: 'Suppliers List',
        iconName: 'group',
        route: 'suppliers'
      }
    ]
  },
  {
    displayName: 'Stock',
    iconName: 'account_balance',
    route: 'stock',
    children: [
      {
        displayName: 'Stock Order',
        iconName: 'shopping_cart',
        route: 'stock'
      }
    ]
  },
  {
    displayName: 'To-Do',
    iconName: 'playlist_add_check',
    route: 'todoes',
  },

];
export default navItems;
