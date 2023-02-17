// import React from "react";
// import './mainpage.css';
// import './assets/activity.svg';
// import './assets/logo.svg';
// import './assets/profile.svg';


// function Mainpage() {

//     return < WorldHexagonMap {...worldHexagonMapData} />;
// }

// export default Mainpage;

//     function WorldHexagonMap(props) {

//         const {
//             navigationBar,
//             name1,
//             navbarLinkLabel1,
//             navbarLinkLabe12,
//             navbarLinkLabe13,
//             navbarLinkLabe14,
//             title1,
//             value,
//             spanText1,
//             spanText2,
//             title2,
//             amount1,
//             title3,
//             amount2,
//             title4,
//             amount3,
//             title5,
//             amount4,
//             title6,
//             amount5,
//             title7,
//             amount6,
//             amount7,
//             name2,
//             detail,
//             spanText3,
//             spanText4,
//             footer1Props,
//             info1Props,
//             indicator1Props,
//             indicator2Props,
//             indicator3Props,
//             indicator4Props,
//             indicator5Props,
//             footer2Props,
//             informerInfoWithIcon1Props,
//             informerInfoWithIcon2Props,
//             informerInfoWithIcon3Props,
//             info2Props,

//         } = props;

//         return (
//     <div className = "world-hexagon-map screen" >
//         <div className = "container-center-horizontal" > 
//             < div className = "navigation-bar"
//                 style = {{
//                     backgroundImage:`url(${navigationBar})` }}>
//                         <div className = "flex-row" >
//                             < div className = "logo" >
//                                 <img className="logo-1" src="logo.svg" alt="Logo"/>

//                             <div className="name">
//                                 {name1}
//                             </div>
//                         </div>
//                     <div className="search">
//                     <img className="icon" src="icon.svg"alt="Icon" />
//                 </div>
//                 <div className="navbar body--body-1">
//                 <div className="navbar-link-label">
//                     {navbarLinkLabel1}
//                 </div>
//                 <div className="navbar-link-label-1">
//                     {navbarLinkLabe12}
//                 </div>
//                 <div className="navbar-link-label">
//                     {navbarLinkLabe13}
//                 </div>

//                 <div className="navbar-link-label">
//                     {navbarLinkLabe14}
//                 </div> 
//                 </div>
//             <img className="profile" src="profile.svg" alt="Profile" />
//             <img className="option" src="option.svg" alt="Option" />
//             </div>

//                 <div className="tab"></div>
//             </div>

//                             <div className="overlap-group8">
//                                 <div className="overlap-group7">
//                                 <div className="widget-1-size-timeline-chart">
//                                 <div className="info-1">
//                                 <div className="value">
//                                 <div className="value-1">
//                                 <div className="title-1 body--body-2">
//                                     {title1}
//                                 </div>

//                             <div className="value-2 bundline--h5">
//                                 {value}
//                             </div>
//                         </div>
//                         </div>
//                         </div>

//                         <div className="graph">
//                             <img className="chart-1" src="./assets/chart-1.svg" alt="Chart" />
//                             <div className="line">
//                             <div className="overlap-group-1">
//                             <div className="yellow"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                             <Footer number={footer1Props.number} />
//                                 <div className="widget-m-size-big-circle-chart">
//                                     <div className="chart">
//                                         <div className="overlap-group">
//                                             <div className="percent poppins-light-mirage-24px">

//                                         <span className="span poppins- light-mirage-24px">{spanText1}</span>
//                                         <span className="span-1 poppins- light-mirage-24px">{spanText2}</span>
//                                     </div>
//                                 <div className="background"></div>
//                             <img className="progress" src="./assets/progress-1.svg" alt="Progres" />
//                         </div>
//                         </div> 
//                                     <Info amount={info1Props.amount}
//                                         detail={info1Props.detail} />
//                                     </div>
//                                     <img className="hex-map" src="hex- map.svg" alt="Hex map" />
//                                     <div className="overlap-group1">

//                                         <div className="tooltip">
//                                             <Indicator />
//                                                 <div className="info">
//                                                     <div className="title valign-text-middle body--body-1">
//                                                         {title2}
//                                                     </div>
//                                                     <div className="amount valign-text-middle headline--h6">
//                                                         {amount1}
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                                 <img className="arrow" src="arrow.svg" alt="Arrow" />
//                                             </div>

//                                     <div className="overlap-group2">
//                                     <div className="tooltip"> <Indicator className={indicator1Props.className} />
//                                         <div className="info">

//                                     <div className="title valign-text-middle body--body-1">
//                                         {title3}
//                                     </div>

//                                     <div className="amount valign-text-middle headline--h6">
//                                         {amount2}
//                                     </div>
//                                 </div>
//                             </div>

//                                     <img className="arrow" src="arrow.svg"  alt="Arrow" />
//                                 </div>

//                                 <div className="overlap-group3">
//                             <div className="tooltip">
//                                 <Indicator className= {indicator2Props.className} />
//                             <div className="info">

//                             <div className="title valign-text-middle body--body-1">
//                                 {title4}
//                             </div>
//                             <div className="amount valign-text-middle headline--h6">
//                                 {amount3}

//                             </div>
//                         </div>
//                     </div>

//                             <img className="arrow" src="arrow.svg" alt="Arrow" />
//                             </div>
//                             <div className="overlap-group4">
//                             <div className="tooltip">

//                             <Indicator className={indicator3Props.className} />
//                             <div className="info">
//                         <div className="title valign-text- middle body--body-1">
//                             {title6}
//                         </div>
//                     <div className="amount valign-text-middle headline--h6">
//                             {amount4} 
//                         </div>
//                     </div>
//                 </div>
//                 <img className="arrow" src="arrow.svg" alt="Arrow"/>
//                 </div>
//                     <div className="overlap-group5">
//                 <div className="tooltip">

//                 <Indicator className={indicator4Props.className} />
//                     <div className="info">
//                         <div className="title valign-text-middle body--body-1">
//                         {title6}
//                     </div>
//                         <div className="amount valign-text-middle headline--h6">
//                             {amount5}
//                         </div>
//                     </div>
//                 </div>

//                 <img className="arrow" src="arrow.svg" alt="Arrow" />
//                 </div>

//                 <div className="overlap-group6">
//                     <div className="tooltip"> <Indicator className={indicator5Props.className} />
//                     <div className="info">
//                 <div className="title valign-text-middle body--body-1">
//                     {title7}
//                 </div>
//                 <div className="amount valign-text-middle headline--h6">
//                     {amount6}
//                 </div>
//             </div>
//         </div>

//                 <img className="arrow" src="arrow.svg" alt="Arrow" />
//         </div>

//         <Footer number={footer2Props.number} />
//         <h1 className="amount-1 headline--h1">
//             {amount7}
//         </h1>
//             <div className="title-2">
//                 <div className="name-1 headline--h6">
//                     {name2}
//                 </div>
//             <div className="detail">
//             <div className="detail-1 tips-and-details--overline-">
//                 {detail}
//             </div>

//             <img className="arow" src="arow.svg" alt="Arow" />
//         </div>
//     </div>
// </div>

//                 <div className="side-indicators">
//                     <InformerInfoWithIcon title={informerInfoWithIcon1Props.title}
//                     value={informerInfoWithIcon1Props.value}
//                     iconProps={informerInfoWithIcon1Props.iconProps} />

//                     <InformerInfoWithIcon title={informerInfoWithIcon2Props.title}
//                     value={informerInfoWithIcon2Props.value}
//                     iconProps={informerInfoWithIcon2Props.iconProps} />
//                 </div>

//                 <div className="widget-m-size-big-circle-chart-1">
//                     <div className="chart"> <div className="overlap-group">
//                         <div className="percent poppins-light-mirage-24px">
//                             <span className="span poppins-light-mirage-24px">
//                                 {spanText3}</span>

//                             <span className="span-1 poppins-1ight-mirage-24px">
//                                 {spanText4}</span>
//                         </div>
//                     <div className="background"></div>
//                         <img className="progress-1" src="progress.svg" alt="Progress" />
//                     </div>
//                 </div>

//                 <Info amount={info2Props.amount} detail={info2Props.detail} />
//                 </div>
//             </div>
//         </div>
//         </div>
//         );
//     }

//     function Footer(props) {
//             const { number } = props;
//         return (
//                 <div className="footer tips-and-details--overline-">
//                     <div className="name-2 valign-text-middle">
//                         ORION DATA VISUALISATION
//                     </div>

//         <div className="number valign-text-middle">
//             {number}
//         </div>
//         </div>
//         );
//     }

//     function Info (props) {
//         const { amount, detail } = props;

//         return (
//             <div className="info-2">
//                 <div className="amount-2 body--title">
//                     {amount}
//                 </div>
//             <div className="detail-2 body--body-1">
//                 {detail}
//             </div>
//         </div>
//     );
// }
//         // function Info (props) {
//         //     const{ amount, detail } = props;
//         // return (
//         //         <div className="info-2">
//         //             <div className="amount-2 body--title">
//         //                 {amount}
//         //             </div>
//         //         <div className="detail-2 body--body-1">
//         //                 {detail}
//         //             </div>
//         //         </div>
//         //     );
//         // }
    
//     function Indicator(props) { const { className} = props;
    
//     return (
//             <div className={`indicator $(className || ""}`}>
//                 <img className="icon-1" src="icons.svg" alt="icon-trash" />
//             </div>
//         );  
//     }
//     function InformerInfoWithIcon (props) {
//         const{title,value, iconProps } = props;
//             return (
//                 <article className="informer-info-with-icon">
//                     <Icon className={iconProps.className} />
//                         <div className="info-3">
//                             <div className="title-3 valign-text-middle body--title">
//                                 {title}
//                             </div>
        
//                 <div className="amount-3">
//                 <div className="value-3 valign-text-middle headline--h6">
//                     {value}
//                 </div>
//             </div>
//         </div>
        
//         </article>
//         );
//     }
//     function Icon(props) {

//         const {className} =props;
//         return (
//             <div className={`icon-2 $(className || ""}`}>
//                 <img className="activity" src="./assets/activity.svg" alt="Activity" />
//             </div>
//         )
//     };
        
//         const footer1Data = { 
//             number: "2019",
//         };
        
//         const info1Data = {
//             amount: "22,652",
//             detail: "New users",
//         };
        
//         const indicator2Data = {
//             className: "indicator-1",
//         };
//         const indicator3Data = {
//             className: "indicator-2",
//         };
        
//         const indicator4Data = { 
//             className: "indicator-3",
        
//         };
        
//         const indicator5Data = {
//             className: "indicator-4",
        
//         };
        
//         const indicator6Data = { 
//             className: "indicator-5",
//         };
        
//         const footer2Data = { 
//             number: "2022",
//         };
//         const icon1Data ={
//             className:" "
//         };

//         const informerInfoWithIcon1Data = { 
//             title: "Total earning", 
//             value: "540,549", 
//             iconProps: icon1Data,
//         };

//         const icon2Data = { 
//             className: "icon-3",
//         };

//         const informerInfoWithIcon2Data = { 
//             title: "Sales", 
//             value: "1,205, 677", 
//             iconProps: icon2Data,
//         };

//         const icon3Data = {
//             className: "icon-4",
//         };
//         const informerInfoWithIcon3Data = {
//             title: "Purchase",
//             value: "48,430,039", 
//             iconProps: icon3Data,
//         };

//         const info2Data = {
//             amount: "92,980",
//             detail: "Active users",
//         };

//         const worldHexagonMapData = { 
//             navigationBar: "background.png",
//             name1: "ORION",
//             navbarLinkLabel1: "Statistics",
//             navbarLinkLabe12: "Overview",
//             navbarLinkLabel3: "Dashboard",
//             navbarLinkLabel4: "Analytics",
//             title: "Sales Figures",
//             value: "$10,430",
//             spanText1: "67", 
//             spanText2: "%",
//             title2: "Chicago",
//             amount1: "98,320,300",
//             title3: "Manaus", 
//             amount2: "12,320,300",
//             title4: "Berlin",
//             amount3: "76,541, 106",
//             title5: "Giza",
//             amount4: "10,547,980",
//             title6: "Shanghai",
//             amount5: "239,570, 110",
//             title7: "Queensland",
//             amount6: "6,097, 321",
//             amount7: "2,431,340",
//             name2: "All users", 
//             detail: "DETAIL",
//             spanText3: "27",
//             spanText4: "%",

//     footer1Props: footer1Data, 
//     info1Props: info1Data,
//     indicator1Props: indicator2Data,
//     indicator2Props: indicator3Data,
//     indicator3Props: indicator4Data, 
//     indicator4Props: indicator5Data,
//     indicator5Props: indicator6Data,
//     footer2Props: footer2Data,
//     informerInfoWithIcon1Props:informerInfoWithIcon1Data,
//     informerInfoWithIcon2Props: informerInfoWithIcon2Data,
//     informerInfoWithIcon3Props:informerInfoWithIcon3Data,
//     info2Props: info2Data,

// };
