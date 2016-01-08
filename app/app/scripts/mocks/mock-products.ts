import {Product} from '../models/product';
import {Suggestion} from '../models/suggestion';
import {Comment} from '../models/comment';
import {User} from '../models/user';


export var PRODUCTS: Product[] = [
  {
      id: 1, 
      name: 'Employee Mobile App', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis nibh metus. Morbi semper elit in sodales vehicula. Pellentesque ornare consequat diam, a egestas dolor. Nam malesuada ante eget risus malesuada, finibus pretium sem semper. Duis vitae tellus est. Nam et consequat nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada ',
      suggestions: [
          {
              id: 1,
              title: 'This could be better',
              description: 'Pellentesque ornare consequat diam, a egestas dolor. Nam malesuada ante eget risus malesuada, finibus pretium sem semper. Duis vitae tellus est. Nam et consequat nibh.',
              createUser: {
                  id: 122281,
                  name:'Overton, Ryan'
              },
              createDate: '01/01/2016',
              votes: 25,
              comments:[
                  {
                      id:1,
                      description:'',
                      createUser:{
                          id: 122281,
                          name:'Overton, Ryan'
                      },
                      createDate: '01/01/2016'                
                  }
              ]
          }       
        ]      
    },  
  {
      id: 2, 
      name: 'PRIME', 
      description: 'Nunc tincidunt metus in pretium sollicitudin. Etiam hendrerit ornare nulla nec pretium. Suspendisse fringilla volutpat est, a porta sem luctus nec. Fusce eget leo sagittis, pulvinar enim eu, gravida eros. Nunc vitae nunc arcu. Nam feugiat volutpat ante. Suspendisse lacinia hendrerit ligula, sit amet auctor tortor iaculis et. Sed elementum odio elit, quis lacinia nisi semper eu. Sed a consequat nibh, in congue leo.',
      suggestions: []     
    },
  {
      id: 3, 
      name: 'Audit', 
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus a felis eu tellus interdum cursus eget quis tellus. Ut sit amet tortor sodales, accumsan purus a, dignissim lectus. Maecenas id faucibus tortor, vitae auctor erat. Integer vel tortor finibus, sollicitudin metus sed, sollicitudin nunc. Praesent facilisis bibendum elit, sit amet viverra velit porta a. Sed placerat condimentum diam, quis facilisis elit efficitur sed. Phasellus pharetra ornare commodo.',
      suggestions: []      
    }, 
  {
      id: 4, 
      name: 'Timecard', 
      description: 'Curabitur vel erat odio. Maecenas convallis eros lobortis, tincidunt purus et, pharetra lorem. Ut vitae congue neque, ut varius neque. Cras non elit quis sem dignissim rutrum eget ut dui. Duis sed nisl vitae ipsum tincidunt congue convallis ac elit. Aliquam molestie bibendum libero in volutpat. Aenean sit amet tincidunt ipsum. Donec at viverra dolor. Donec mollis nisl id sem tincidunt, et scelerisque purus mattis. Donec dapibus lacus at vulputate molestie. Proin sed quam blandit, accumsan nisl a, facilisis metus. Nulla facilisi.',
      suggestions: []     
    },
  {
      id: 5, 
      name: 'Store Menu', 
      description: 'Nulla rutrum convallis libero id suscipit. Suspendisse potenti. Suspendisse ac orci faucibus eros congue consequat. Phasellus est dui, commodo a tincidunt quis, tempus non ipsum. Phasellus tristique diam sed ornare aliquam. Quisque egestas luctus malesuada. Fusce at velit a erat imperdiet dignissim. Ut vulputate orci massa, eget facilisis elit feugiat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur turpis et ex placerat, ac pretium quam tristique.',
      suggestions: []     
    },  
];