import * as React from 'react';
import styles from './ListAndFieldPicker.module.scss';
import { IListAndFieldPickerProps } from './IListAndFieldPickerProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DynamicForm } from '@pnp/spfx-controls-react/lib/DynamicForm';
import { IListAndFieldPickerState } from './IListAndFieldPickerState';

export default class ListAndFieldPicker extends React.Component<IListAndFieldPickerProps, IListAndFieldPickerState ,{}> {

  constructor(props: IListAndFieldPickerProps ) {
    super(props);
    // this._spOps = new SPOperartions();
    this.state = { selectedListId:"Initial GUID", status:  "Initial state" };
    
  }

  public render(): React.ReactElement<IListAndFieldPickerProps> {
    return (         

      <div>
        <button onClick={() => this.refreshState()}>Click me!</button>
        <div>{ this.state.status }</div>
        <div>{ this.state.selectedListId }</div>
        <DynamicForm context={this.props.context} listId={this.state.selectedListId}></DynamicForm>
      </div>
    );
  }

  public refreshState(){
    this.setState({ status:"State updated", selectedListId:"Please set new list GUID"});
  }


  // <div >       
      //   <div className={styles.row}>
      //     <div className={styles.column}>
      //     {/* <div>Hello {this.state.selectedListId}</div> */}
      //     <div>Status is {this.state.status}</div>
      //       {/* <span>Selected List ID : {this.state.selectedListId} and List Item Id is : {this.props.ListItemId} </span>            */}

      //       <DynamicForm context={this.props.context} listId={this.state.selectedListId} listItemId={this.props.ListItemId}            
      //         onSubmitted={async (listItemData) => { console.log(listItemData); }}                           
      //         onCancelled={() => { console.log('Cancelled') }}
      //       ></DynamicForm>
      //     </div>
      //   </div>
      // </div>

//   private _onCalloutDismiss() {
//     if (this.state.status) {
//         this.setState({
//             selectedListId: this.props.lists
//         });
//     }
// }

// componentDidMount() {
//  // this.setState({status:"component mount"});
//   // setInterval(() => {
//   //     this.setState(()=>{
//   //         return { status: "interval" }
//   //     });
//   // }, 1000);
// }



   // onSubmitted={() => this._spOps.CreateListItem(this.props.context, this.listTitle)
              // .then((result: string) => { this.setState({ status: result }); })}


  //   // onBeforeSubmit={(listItemData) => {console.log(listItemData); return listItemData; }}

  //  {/* {(this.render())}       */}
  //           {/* {(this.setState(this.state)=>{return {selectedListId:"Bc66829b9-0e16-42b9-8b9e-97e7e466c5ca"};})} */}  
  //           {this.state.selectedListId}
  //           {this.state.status}

  // <div> Hey This is from tsx </div>
  //       <div className={styles.container}>
  //         <div className={styles.row}>
  //           <div className={styles.column}>
  //             <span className={styles.title}>Welcome to SharePoint!</span>
  //             <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
  //             <p className={styles.description}>{escape(this.props.description)}</p>
  //             <a href="https://aka.ms/spfx" className={styles.button}>
  //               <span className={styles.label}>Learn more</span>
  //             </a>
  //           </div>
  //         </div>
  //       </div>

  //       {/*  listId={"2593ed60-5b06-4f13-bf59-64954898f2f7"} */}
  //       {/* {"Bc66829b9-0e16-42b9-8b9e-97e7e466c5ca"}   */}


  // public componentDidMount() {
  //   {
  //     this.setState({ selectedListId: this.props.lists, status:"updated"});
  //   };
  // }

}
