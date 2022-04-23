import React from 'react';
import './board.css';
import List from './list'
import './balloons.js'; 
/*import Data from './data'*/

const Info = [
    {
        img : "https://media-exp1.licdn.com/dms/image/C5603AQHK5AOKMiVs3A/profile-displayphoto-shrink_800_800/0/1564620462111?e=2147483647&v=beta&t=Tixe1LsTxK2XtHJYe90DsVsPsHV4YEX8n4GX_OefAv4",
        name : "Khushboo Jakhmola", birthday : "2001-04-26"
    },
    /*{
        img : "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Miller Wright", birthday : "1998-04-20"
    },*/
    {
      img : "https://media-exp1.licdn.com/dms/image/C5103AQEa9OCXf6Jidw/profile-displayphoto-shrink_400_400/0/1586493476926?e=1654732800&v=beta&t=KE7d6ypHhMsYF5EjM-1FuFN99sUKa4WqedIgv03Ks8o",
      name: "Sanyam Mehendiratta", birthday: " 2000-02-11"
    },
    
  ]

export default function board() {
  return (
      <main id='site-main'>
          <h1 className="text-dark title">Happy Birthday!</h1>

          <div className="board">
                <List info={Today(Info)}></List>
                <h2 className='upcoming text-dark'>Upcoming</h2>
                <List info={Upcoming(Info, 0)} upcoming={true}></List>
          </div>
          <script src="balloons.js"></script>
      </main>
  );
}

function Today(person){
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();

    let filter = person.filter(data => {
        let day = new Date(data.birthday).getDate();
        let month = new Date(data.birthday).getMonth();

        return currentDay === day && currentMonth === month;
    })
    return filter;
}


// upcoming birthdays
function Upcoming(person, toMonth){
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDate();

    let filter =person.filter(data => {
        let month = new Date(data.birthday).getMonth();
        let day = new Date(data.birthday).getDate();
        if (currentDay === day) return 0;
        return month >= currentMonth && month <= currentMonth + toMonth;
    })

    return filter.slice(0,2);

}