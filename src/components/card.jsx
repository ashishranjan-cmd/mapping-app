function MyDocker(props){
    return (
    <div>
      <div className="card">

        <div className="top">
          <div className="logoimage">
            <img className="logoimg" src={props.logoimg} />
          </div>
          <div className="buttoncontrols">
            <button>Start</button>
            <button>Stop</button>
          </div>
          <div className="currentstatus">
            {props.status}
          </div>
        </div>

        <div className="bottom">
          <div className="livecmd">
            {props.terminal}
          </div>
          <div className="runscript"></div>
        </div>

      </div>
    </div>
    )
}

export {MyDocker}