import "./preview.css"
const Preview=(props)=>{
    console.log(props.page.replace(' ',''))
    return (
    props.page!='n/a'?
            <div style={{backgroundImage:`url(./${props.page.replace(' ','')}.png)`}} className="preview">
                <p>Home &nbsp; {"/"} &nbsp; Services &nbsp;{props.page!="Services"?`   / ${props.page}`:null}</p>
                <text>{props.page}</text>
            </div>
    :
    null
    )
}
export default Preview;