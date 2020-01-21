import React,{useEffect,useState} from 'react';
import './reactcombo.css';

const ReactSelectDropDown = (props) =>{
    const {data,label,multi,name,required,width,onChange} = props
    const[allData,setAllData] = useState([])
    const [value,setValue] = useState([])
    const [showComboBox,setShowComboBox] = useState(true)

    useEffect(()=>{
        if(allData.length == 0){
            let tempStorage = []
            data.map(v=>{tempStorage.push({"value": v.value ? v.value : v, "label": v.label ? v.label: v,"show": false})})
            setAllData(tempStorage)
        }   
    },[data])

    let columnsdata = [...allData]
    const onColumnCheck = (e,column)=>{
        column.show = e.target.checked
        let temp = []
        if(multi){
            columnsdata.map(v=>{
                if(v.show == true){
                    temp.push(v.value)
                }
            })
        }else{
            let checkboxes = document.getElementsByName('check')
            checkboxes.forEach((item)=>{
                if(item.defaultValue !== column.value)item.checked = false
            })
            temp.push(column.value)
            setValue(temp)
        }
        if(onChange){
            onChange(temp)
        }
    }

    const comboboxButtonStyle = {
        width: width ? width: "180px",
        height: "36px",
        borderRadius: ".25rem",
        fontSize: "16px",
    }

    const comboboxSize = {width: width ? width: "180px"}

    return(
        <div className="combobox-container">
            <div className="combobox">
            <button type="button" style={comboboxButtonStyle} onClick={()=>setShowComboBox(!showComboBox)}>{value.length && multi ? `${value.length} options selected`: value.length ? `${value[0]}` : `Select ${label}`}</button>
                <div style={comboboxSize} className="combobox-over" hidden={showComboBox}>
                    <div className="arrow"></div>
                    <div className="combobox-body">
                        <ul style={comboboxSize} className="combobox-column-list">
                            {
                                allData.map((v)=>{
                                    return(
                                        <li key={v.value}>
                                            <input className="checkbox-style" type="checkbox" value={v.value} name="check" defaultChecked={v.show} onChange={(e)=>{onColumnCheck(e,v)}}/>
                                            <span>{v.label}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <input type="hidden" value={value} name={name} required={required || false}/>
        </div>
    )
}

export default ReactSelectDropDown