// import Card from 'react-bootstrap/Card';
// import DeleteTicket from './DeleteTicket';
// import UpdateTicket from './UpdateTicket';
// import ViewTickets from './ViewTickets';

// const OpenTickets = ({openTicket}) => {
//     console.log(openTicket);

//     return(
        
//         <Card style={{ width: '18rem' }}>
//     <Card.Body>
//         <Card.Title>{openTicket.title}</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">{openTicket.trainee}</Card.Subtitle>
//         <Card.Text>
//             <small className="text-muted">Logged: {openTicket.dateTime}</small>
//         </Card.Text>
//         <ViewTickets
//             id={openTicket.id}
//             title={openTicket.title}
//             traineeName={openTicket.trainee}
//             trainer={openTicket.trainer}
//             cohort={openTicket.cohort}
//             description={openTicket._description}
//             topic={openTicket.topic}
//             completed={openTicket.completed}
//             />
//         <UpdateTicket
//             id = {openTicket.id}
//             oldTitle = {openTicket.title}
//             oldTraineeName = {openTicket.title}
//             oldTrainer = {openTicket.trainer}
//             oldCohort = {openTicket.cohort}
//             oldDescription = {openTicket._description}
//             oldTopic = {openTicket.topic}
//             />
//         <DeleteTicket
//             id = {openTicket.id}
//             />
//     </Card.Body>
// </Card>

// )
// }

// export default OpenTickets;

import Card from 'react-bootstrap/Card';
import DeleteTicket from './DeleteTicket';
import UpdateTicket from './UpdateTicket';
import ViewTickets from './ViewTickets';

const OpenTickets = ({openTicket, refreshPage}) => {
    // console.log(openTicket);

    //add setrefresh thingy

    return(
        
        <Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title>{openTicket.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{openTicket.trainee}</Card.Subtitle>
        <Card.Text>
            <small className="text-muted">Logged: {openTicket.dateTime}</small>
        </Card.Text>
        <ViewTickets
            id={openTicket.id}
            title={openTicket.title}
            traineeName={openTicket.trainee}
            trainer={openTicket.trainer}
            cohort={openTicket.cohort}
            description={openTicket._description}
            topic={openTicket.topic}
            time={openTicket.dateTime}
            completed={openTicket.completed}
            solution={openTicket.solution}
            refreshPage={refreshPage}
            />
        <UpdateTicket
            id = {openTicket.id}
            oldTitle = {openTicket.title}
            oldTraineeName = {openTicket.title}
            oldTrainer = {openTicket.trainer}
            oldCohort = {openTicket.cohort}
            oldDescription = {openTicket._description}
            oldTopic = {openTicket.topic}
            refreshPage={refreshPage}
            />
        <DeleteTicket
            id = {openTicket.id}
            refreshPage={refreshPage}
            />
    </Card.Body>
</Card>

)
}

export default OpenTickets;