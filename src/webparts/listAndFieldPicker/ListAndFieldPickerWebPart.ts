import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ListAndFieldPickerWebPartStrings';
import ListAndFieldPicker from './components/ListAndFieldPicker';
import { IListAndFieldPickerProps } from './components/IListAndFieldPickerProps';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { PropertyFieldColumnPicker, PropertyFieldColumnPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldColumnPicker';

import { IListAndFieldPickerState } from './components/IListAndFieldPickerState';
import styles from './components/ListAndFieldPicker.module.scss';
import { DynamicForm } from '@pnp/spfx-controls-react/lib/DynamicForm';
import { update, get } from '@microsoft/sp-lodash-subset';

export interface IListAndFieldPickerWebPartProps {
  description: string;
  lists: string;
  list: string;
  column: string;
  multiColumn: string;
  ListItemId?:number;
}

// enum IColumnReturnProperty {
//   Id = 0,
//   Title = 1,
//   "Internal Name" = "InternalName"
// }

export default class ListAndFieldPickerWebPart extends BaseClientSideWebPart<IListAndFieldPickerWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IListAndFieldPickerProps> = React.createElement(
      ListAndFieldPicker,
      {
        description: this.properties.description,
        context: this.context,
        lists: this.properties.lists,
        multiColumn: this.properties.multiColumn,
      
      }
    );
    ReactDom.render(element, this.domElement);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }), 
                PropertyFieldListPicker('lists', {
                  label: 'Select a list',
                  selectedList: this.properties.lists,
                  includeHidden: false,
                  orderBy: PropertyFieldListPickerOrderBy.Title,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  context: this.context as any,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'listPickerFieldId',
                  
                }),
                PropertyPaneTextField('ListItemId', {
                  label: "List Item Id",
                  deferredValidationTime: 2000,
                  description: "desc" , 
                })                
              ]
            }
          ]
        }
      ]
    };
  }
}



//,
                //   PropertyFieldColumnPicker('multiColumn', {
                //     label: 'Select columns',
                //     context: this.context as any,
                //     selectedColumn: this.properties.multiColumn,
                //     listId: this.properties.lists,
                //     disabled: false,
                //     orderBy: PropertyFieldColumnPickerOrderBy.Title,
                //     onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                //     properties: this.properties,
                //     onGetErrorMessage: null,
                //     deferredValidationTime: 0,
                //     key: 'multiColumnPickerFieldId',
                //     displayHiddenColumns: false,
                //     columnReturnProperty: IColumnReturnProperty['Internal Name'],
                //     multiSelect: true
                // })


// // <div class="${styles.title}"> 
// //     <p class="${styles.description}">  
// //       ${escape(this.properties.lists)}
// //     </p>                      
// //     <p class="${styles.description}">  
// //     List ID - ${this.properties.ListItemId}                    
// //     </p>    
// // </div>  

// // onSubmitted={async (listItemData) => { console.log(listItemData); }}                          
// // onCancelled={() => { console.log('Cancelled') }}

//   // public render() :void{    
//   //   this.domElement.innerHTML = `
//   //   <div class="${styles.listAndFieldPicker}">
//   //     <div class="${styles.container}"> 
//   //       <div class="${styles.row}">                 
//   //         <div class="${styles.column}">                         
//   //               lists : ${escape(this.properties.lists)}
//   //               listItemId : ${this.properties.ListItemId}
//   //               <div>
//   //           <DynamicForm context=${this.context} listId=${escape(this.properties.lists)} listItemId= ${this.properties.ListItemId}></DynamicForm>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </div>
//   //   `;
//   // }
  

//   protected onDispose(): void {
//     ReactDom.unmountComponentAtNode(this.domElement);
//   }

//   // protected get disableReactivePropertyChanges(): boolean {
//   //   return true;
//   // }

//   // private onListChange(propertyPath: string, newValue: any): void {
//   //   const oldValue: any = get(this.properties, propertyPath);
//   //   if (oldValue !== newValue) {
//   //     this.properties.fields = null;
//   //   }
//   //   // store new value in web part properties
//   //   update(this.properties, propertyPath, (): any => newValue);
//   //   // refresh property Pane
//   //   this.context.propertyPane.refresh();
//   //   // refresh web part
//   //   this.render();
//   // }

//   protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void{    
//     // debugger;
//     // this.setState({selectedListId:"Bc66829b9-0e16-42b9-8b9e-97e7e466c5ca"})
//     //this.context.propertyPane.refresh();
//     // console.log(this);
//     //const items = this.state.items;
//     alert( propertyPath + " Changed, Value of List Item Id is :" + this.properties.lists);
//     // alert(propertyPath);
//     // if (propertyPath === 'lists') {      
//     //   // this._setSelectedList(newValue);
//     //   this.properties.lists = newValue;
//     // }
//     // if (propertyPath === 'ListItemId') {      
//     //   // this._setSelectedList(newValue);
//     //   this.properties.ListItemId = newValue;
//     // }
//     // super.onPropertyPaneFieldChanged(propertyPath, oldValue, newValue);
//      //this.render();       

//     //  alert("onListChange");
//     // const oldValue: any = get(this.properties, propertyPath);
//     // if (oldValue !== newValue) {
//     //   this.properties.fields = null;
//     // }
//     // store new value in web part properties
   
   
    
    
//     //update(this.properties, propertyPath, (): any => newValue);
//     // refresh property Pane
//     //this.context.propertyPane.refresh();
//     // refresh web part
//     this.render();

//   }

// //  protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void {
// //   /*
// //   Check the property path to see which property pane feld changed. If the property path matches the dropdown, then we set that list
// //   as the selected list for the web part. 
// //   */
// //   if (propertyPath === 'spListIndex') {
// //     this._setSelectedList(newValue);
// //   }

// //   /*
// //   Finally, tell property pane to re-render the web part. 
// //   This is valid for reactive property pane. 
// //   */
// //   super.onPropertyPaneFieldChanged(propertyPath, oldValue, newValue);
// // }