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
    {
      img: "https://media-exp1.licdn.com/dms/image/C4D03AQH2G7amKwGBMQ/profile-displayphoto-shrink_400_400/0/1647764805478?e=1654732800&v=beta&t=bSxI-4tDbyAWeRc-bAdc9P2hW2iZEwIxl-BkvsoZ-Bc",
      name: "Adarsh Shukla", birthday: " 2000-06-11"
    },
    {
      img: "https://media-exp1.licdn.com/dms/image/C4D03AQE9cA-XeHW1_Q/profile-displayphoto-shrink_400_400/0/1643096505406?e=1654732800&v=beta&t=0M9a0zGWUyQG_mHc-cmLDxkbPtiYiWtUcbahrYDNmbs",
      name:"Arpita", birthday: " 2000-07-07"
    },
    {
      img: "https://media-exp1.licdn.com/dms/image/C4D03AQGbwwj2zseuBg/profile-displayphoto-shrink_400_400/0/1598724488614?e=1654732800&v=beta&t=cHP_H7SzO_wZdQXfJm4rZdcNA3bMUbyjYB2gL_zsWs4",
      name: "Digam Gupta", birthday:" 2000-08-20"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/D5603AQFVb_WeKJwk3Q/profile-displayphoto-shrink_400_400/0/1648489688920?e=1654732800&v=beta&t=QNiKe5vDEJEeM1vEpUxzIHPEYCuEMvNcq_kYpciC-gE",
      name: "Ishika Kesarwani", birthday:" 2000-08-24"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C4E03AQG5ml56ZFARcA/profile-displayphoto-shrink_400_400/0/1630622492056?e=1654732800&v=beta&t=cZCFMhjAvw9O8ZTlq61k8hpoc4j5NjoEBabnrmezYbc",
      name: "Parth Shingari", birthday:" 2000-09-28"
    },
    {
      img: "https://media-exp1.licdn.com/dms/image/C5603AQFvbu2IBE3S9w/profile-displayphoto-shrink_400_400/0/1647917167049?e=1654732800&v=beta&t=CaCg1AHOEcsGtgbDqB_4X5X1sCXKMPyQ9IxVt3-ea0o",
      name: "Jigyasu Kukreja", birthday:" 2000-11-30"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C4D03AQG9ZeutOjFKLw/profile-displayphoto-shrink_400_400/0/1641917462279?e=1654732800&v=beta&t=fUqG05uAV3RtPXtsooq-z6fzpRx6n_jChsg16uLa7Gg",
      name:"Rohan Saksena", birthday:"2000-11-30"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C5603AQF3xbi88lybqg/profile-displayphoto-shrink_400_400/0/1611574443794?e=1654732800&v=beta&t=ezurn-GxUHM468ZYBB-l4q7ba5r-bcFDTRpohNCRIKk",
      name:"Akash Saini", birthday:"2000-12-15"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C5603AQHenarv5Nj6yg/profile-displayphoto-shrink_800_800/0/1637312459069?e=1653523200&v=beta&t=Tv9GPqWbB1PO7PPUlFg6fFHc2ofLI6pbuOkNso5GEm8",
      name:"Raghav Agarwal", birthday:"2001-02-28"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C5603AQFx90A8M-4-tQ/profile-displayphoto-shrink_400_400/0/1645020527509?e=1654732800&v=beta&t=l2Nko9rM8RMKGHNyCfHPlLwfXXWFpe_v9J6YxXLBGS8",
      name:"Shudhanshu Shrotriya ", birthday:"2001-05-11"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C4E0BAQHrP76ZeUc36w/company-logo_200_200/0/1604045815454?e=2147483647&v=beta&t=8mmLgNDhL-UF3KObtUoruzUV70Z3XyGI3eOOoqDtAXw",
      name:"Shreeji Saraogi", birthday:"2001-05-11"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C5103AQHw5oPIw5yvDQ/profile-displayphoto-shrink_400_400/0/1573561220228?e=1654732800&v=beta&t=z_kyTActwj2IItdxrtAKxAd8l48ZSbDGNZ08X0-7HRg",
      name:"Divij Chaudhari", birthday:"2001-10-01"
    },
    /*{
        img:"https://media-exp1.licdn.com/dms/image/C4D03AQE4d8L2B4vP5w/profile-displayphoto-shrink_400_400/0/1646662715799?e=2147483647&v=beta&t=depcg3JD0ND6ycCZqRFaxSrPFiVl_CWs9g-2jeRUiuY",
        name:"Alok Dixit", birthday:"2001-10-03"
    },*/
    {
      img:"https://media-exp1.licdn.com/dms/image/C4E0BAQHrP76ZeUc36w/company-logo_200_200/0/1604045815454?e=2147483647&v=beta&t=8mmLgNDhL-UF3KObtUoruzUV70Z3XyGI3eOOoqDtAXw",
      name:"Snigdha Parashar", birthday:"2001-10-05"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C4E0BAQHrP76ZeUc36w/company-logo_200_200/0/1604045815454?e=2147483647&v=beta&t=8mmLgNDhL-UF3KObtUoruzUV70Z3XyGI3eOOoqDtAXw",
      name:"Harsh Raturi", birthday:"2001-12-05"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C5603AQF7Sz4U_RqlvQ/profile-displayphoto-shrink_400_400/0/1643742235302?e=1654732800&v=beta&t=hnggoDQa08asf0ZR-RzJK4KoOquD4x0qQ3ODjZYvLEE",
      name:"Srijan Agrawal", birthday:"2001-12-17"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C4E0BAQHrP76ZeUc36w/company-logo_200_200/0/1604045815454?e=2147483647&v=beta&t=8mmLgNDhL-UF3KObtUoruzUV70Z3XyGI3eOOoqDtAXw",
      name:"Akarshan Nigam", birthday:"2001-12-24"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C4E0BAQHrP76ZeUc36w/company-logo_200_200/0/1604045815454?e=2147483647&v=beta&t=8mmLgNDhL-UF3KObtUoruzUV70Z3XyGI3eOOoqDtAXw",
      name:"Jahnvi Singh", birthday:"2002-01-25"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/D4D35AQHof72bjBRKvw/profile-framedphoto-shrink_400_400/0/1648281530833?e=1649325600&v=beta&t=__zLd_RjJjqX-GPplBbEmxrAqYWy8sBGXy9yFvoRZ28",
      name:"Nayan Patel", birthday:"2002-05-26"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C4D03AQGiYmlGxPv96A/profile-displayphoto-shrink_400_400/0/1628683541476?e=2147483647&v=beta&t=a9dfWEtCeWjk1msRVMTUq7HNfKwN5Y2LqM2l-vfUtzA",
      name:"Nandini Nanda", birthday:"2002-05-27"
    },
    {
      img: "https://media-exp1.licdn.com/dms/image/C4D03AQG6gdfNKo6gPQ/profile-displayphoto-shrink_800_800/0/1623842463939?e=1653523200&v=beta&t=H761EAe51LqKdjmx_ikYM99tgwYYse7fL0ocgybm2sE",
      name:"Sejal Jaiswal", birthday:"2002-06-02"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/D4D35AQGdHvj2fg0O7w/profile-framedphoto-shrink_400_400/0/1634982865221?e=1649325600&v=beta&t=3bE2KBHTUOPe41j_iA9yICt4GiTilB-QLKGschwHZlw",
      name:"Satyam Hans", birthday:"2002-07-03"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C4D03AQEushy6POHcSw/profile-displayphoto-shrink_400_400/0/1612468558837?e=1654732800&v=beta&t=p7RQ5qr8VhTNubx0N5iiRt9IIxb_KkVu0WB_1U1xops",
      name:"Manan Gupta", birthday:"2002-07-14"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C4E0BAQHrP76ZeUc36w/company-logo_200_200/0/1604045815454?e=2147483647&v=beta&t=8mmLgNDhL-UF3KObtUoruzUV70Z3XyGI3eOOoqDtAXw",
      name:"Charu Gupta",birthday:"2002-07-27"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C4E0BAQHrP76ZeUc36w/company-logo_200_200/0/1604045815454?e=2147483647&v=beta&t=8mmLgNDhL-UF3KObtUoruzUV70Z3XyGI3eOOoqDtAXw",
      name:"Yashraj Prasad", birthday:"2002-08-28"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C4E0BAQHrP76ZeUc36w/company-logo_200_200/0/1604045815454?e=2147483647&v=beta&t=8mmLgNDhL-UF3KObtUoruzUV70Z3XyGI3eOOoqDtAXw",
      name:"Sarthak Tiwari", birthday:"2002-09-17"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C4E03AQFj8FFnhW336Q/profile-displayphoto-shrink_400_400/0/1647273694674?e=1654732800&v=beta&t=3JkgdOrZtTAz6m-M4jicTmIOscPQWWIia2aB5JbRZDk",
      name:"Sona Tyagi", birthday:"2002-10-07"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C5603AQGkBq6MZRnelA/profile-displayphoto-shrink_400_400/0/1601452227513?e=1654732800&v=beta&t=9pkyTdKAfu3QpX-MbLYrVao1UwslV6QMBRlvqQcoEdI",
      name:"Aditya Punetha", birthday:"2002-11-12"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C5603AQHiWwAXhgT9BQ/profile-displayphoto-shrink_400_400/0/1637220642449?e=1654732800&v=beta&t=_OwSam1dnXk7h-1FQseNM9rfWIgQx-A_AK5sJePFkM0",
      name:"Dhruv Lamba", birthday:"2002-11-15"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/D4D35AQHfQn2YIqA7qw/profile-framedphoto-shrink_400_400/0/1645676915407?e=1649325600&v=beta&t=19kl7BwL066kLE3BySl_jGdlpXK6YGNYICiqnym4cR8",
      name:"Medhavi Singh", birthday:"2002-11-16"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/D4E35AQHTHiZ7g8Dq7Q/profile-framedphoto-shrink_400_400/0/1629966125810?e=1649325600&v=beta&t=GMsst5Uc2M2otw3KcDwyuuoeliBRVjq8XsNzKOSsYRE",
      name:"Shiwanshi Pandey", birthday:"2002-12-07"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C4E0BAQHrP76ZeUc36w/company-logo_200_200/0/1604045815454?e=2147483647&v=beta&t=8mmLgNDhL-UF3KObtUoruzUV70Z3XyGI3eOOoqDtAXw",
      name:"Nimol Kainth", birthday:"2002-12-12"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C4E0BAQHrP76ZeUc36w/company-logo_200_200/0/1604045815454?e=2147483647&v=beta&t=8mmLgNDhL-UF3KObtUoruzUV70Z3XyGI3eOOoqDtAXw",
      name:"Bharti Bhathotia", birthday:"2003-01-21"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C4E03AQG_3_i9xy2aBw/profile-displayphoto-shrink_400_400/0/1628193531211?e=1654732800&v=beta&t=n592b7Y6m2lPw1NYhDHbi7HwYvjGflS2RkkDa3EVMvo",
      name:"Anuva Garg", birthday:"2003-01-25"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C5603AQHdzccnVTXbWQ/profile-displayphoto-shrink_400_400/0/1633573695753?e=1654732800&v=beta&t=kSoN-ZNnY8pA135vsyd1B7GIS341hWZqzTlK6AA7pKQ",
      name:"Vikash Kumar", birthday:"2003-02-04"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C5603AQGKrXjO1WJ-Lw/profile-displayphoto-shrink_400_400/0/1648882408501?e=1654732800&v=beta&t=UYkXPstN9CWMtAdRpnQLPz8szWRihGQ3swq9car-Wkc",
      name:"Bhavika Jetwani", birthday:"2003-02-25"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C4E03AQEjqsMyNm8rhw/profile-displayphoto-shrink_400_400/0/1633844533271?e=1654732800&v=beta&t=LNSecksVcjnaQ5iTUeOB3KEDTqISUweaeimu-5todvY",
      name:"Mridul Vasudeva", birthday:"2003-03-17"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C4D03AQH_n0Fn9BNrSg/profile-displayphoto-shrink_400_400/0/1640068226404?e=2147483647&v=beta&t=2fo2yfGBow1cT7BxRbn_pqG82Tpgv8s_xTQVUpyltDI",
      name:"Smriiti Rai", birthday:"2003-03-24"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/D4D03AQHc1PRKml0U1g/profile-displayphoto-shrink_400_400/0/1638464446773?e=1654732800&v=beta&t=UfcKyHsgyW-zFM8l148cm_hWfrKP1W3Rm_Z9uVLMF58",
      name:"Pawan Bajaj", birthday:"2003-04-03"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C4E0BAQHrP76ZeUc36w/company-logo_200_200/0/1604045815454?e=2147483647&v=beta&t=8mmLgNDhL-UF3KObtUoruzUV70Z3XyGI3eOOoqDtAXw",
      name:"Ashutosh Kapoor",birthday:"2003-05-09"
    },
    {
      img:"https://media-exp1.licdn.com/dms/image/C4E03AQHbBTFAMr26uQ/profile-displayphoto-shrink_400_400/0/1615826391328?e=2147483647&v=beta&t=48ti6m8qTW4R-t4Gzb0sDI37H9D8tspFvr4U6cXSqJs",
      name:"Sparsh Patial", birthday:"2003-07-05"
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