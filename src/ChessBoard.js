import React,{useState,useEffect} from "react";
import './ChessBoard.css';


function BaseGenerate(){
    let BaseArray = [];
    const looprow = Array(8).fill("");
    const loopcol = Array(8).fill("");

    // 寫法1
    // looprow.forEach(v=>{s
    //     let colArray =[]
    //     loopcol.forEach((_,n)=>{
    //         colArray.push(n)
    //     })
    //     BaseArray.push(colArray)
    // })
    // 寫法2
    // looprow.map((_,rn)=>{
    //   let colArray = [];
    //   loopcol.map((_,cn)=>{
    //     colArray[cn] = cn
    //     return null;
    //   })
    //   BaseArray.push(colArray)
    //   return null;
    // })
    // 寫法3
    BaseArray = Array.from(looprow.map((_,rn)=>{
        let colArray = [];
        loopcol.map((_,cn)=>{
          return colArray[cn] = rn*10 + cn
        })
        return colArray;
      }))
    return(
      BaseArray
    )
  }

const BoardCells = (props)=>{
    
    
        let list = props.boardarray.map((v,n)=>{
            return(
            <div style={{display:'flex',wrapContent:'wrap'}} key={"row"+n}>
                {v.map((v1,n1)=>{
                   return <Cells N1={n} N2={n1} key={"CELLS "+n+n1} />
                })}
            </div>
            )
        });
        console.log(props.boardarray)
        return list

}
const Cells = (props)=>{
    const [CellState,setCell] = useState(0)
    const HandleClick = ()=>{
        setCell(CellState+1)
    }
    const colors ={
        Single : "#EA7500",
        Double : "#FFBB77"
    }
    
    
    
    const usecolor = (props.N1+props.N2)%2===0 ? colors.Single : colors.Double;
    return <div className="cells"key={"Board"+props.N1*10+props.N2} onClick={HandleClick} style={{background:usecolor}}>{CellState}</div>
}



  
  
const CheckerBoard = (props)=>{
    const boardarrays = BaseGenerate();
    const [BaseState , setBaseState]=useState(boardarrays);
    

    return (
      <>
        <div id="board">
            {console.log('render')}
            <BoardCells boardarray={BaseState} />
        </div>
      </>
    )
  }

  export default CheckerBoard;