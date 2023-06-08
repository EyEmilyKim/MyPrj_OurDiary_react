export default function Days(){

    const days = [
        { 'id': 1, day:'2023-06-05월'},
        { 'id': 2, day:'2023-06-06화'},
        { 'id': 3, day:'2023-06-07수'}
    ];
    let lis = [];
    for(let i=0; i<days.length; i++){
        lis.push(
            <li key={days[i].id}><a href=''>{days[i].day}</a></li>
        );
    }
    return(
        <div>
            <ol>
                {lis}
            </ol>
        </div>
    )
}