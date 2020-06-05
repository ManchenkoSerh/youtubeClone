import React from 'react';
import {Grid} from 'semantic-ui-react'
import {Input,Button,Icon} from 'semantic-ui-react';
import "./HeaderYT.scss"
import { useHistory} from 'react-router-dom';
import {keyWord} from "../../redux/action/action";
import {connect} from "react-redux"

function HeaderYT({dispatch}) {
    let input;
    let history = useHistory();

    function handleClick() {
        history.push("/search");
    }
    return (
        <Grid.Row>
          <Grid.Column  width={3}>
              <Button><Icon className="large align justify"/></Button>
              <Icon className="large youtube sign"/>
          </Grid.Column>
          <Grid.Column  width={10}>
              <form onSubmit={(e)=>{
                  e.preventDefault();
                  if(!input.value.trim()){
                      return;
                  }
                  handleClick()
                  dispatch(keyWord(input.value))
                  input.value="";
              }}>
              <div className="ui action input">
                  <div className="ui right icon input">
                  <input ref={(node)=>input=node}    className="search-panel" placeholder="Введите текст"/>
                      <i className="keyboard icon"></i>
                  </div>
                  <Button type="submit" className="ui icon button">
                      <Icon name='search'/>
                  </Button>

              </div>
              </form>
          </Grid.Column>
          <Grid.Column  width={3}>
              <Button><Icon className=" large video" title="Создать видео или запись"/></Button>
              <Button><Icon className="large th" title="Приложения Youtube"/></Button>
              <Button><Icon className="large bell" title="Уведомления"/></Button>
              <Button><Icon className="large user circle" /></Button>
          </Grid.Column>
        </Grid.Row>
    );
  }

  export default connect()(HeaderYT);
