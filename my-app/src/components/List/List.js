import {React} from "react"
export default function List({items,layout}){
    const nList = []
    const aList = []
    items.map(item=>{
        if(Number(item))
            nList.push(<li>{item}</li>)
        else
            aList.push(<li>{item}</li>)
    })
    return (
        <>
            <div>
                <ol style={{listStyleType: 'lower-alpha'}}>
                    {layout=='numbered'?nList:aList}
                </ol>
            </div>
        </>
    )
}