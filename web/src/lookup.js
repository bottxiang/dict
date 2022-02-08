import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { BackTop, Row, Col, Layout } from 'antd';
import Home from './Home'
import SearchBar from './searchbar';
import WordCard from './wordcard';
import './style.css';

const { Header, Content } = Layout;

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

const LookupWordComponent = () => {
  const [inputText, setInputText] = useState("");
  const [select, setSelect] = useState("");
  const [page, setpage] = useState(-1);
  const [showLearnMore, setShowLearnMore] = useState(false);

  const handleInputChange = (inputText) => {
    setInputText(inputText);
    console.log("handleInputChange in lookup.js: ", inputText);
  };

  const handleSelectChange = (select) => {
    setSelect(select);
    console.log("select change: ", select);
  }

  return (
    <Router>
      <div className='lookup'>
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <SearchBar
                word={inputText}
                select='vi-zh'
                onSelectChange={handleSelectChange}
              />
              <Home />
            </Route>
            <Route path='/vi-vi/:word'>
              <SearchBar
                word={inputText}
                select={select}
                onSelectChange={handleSelectChange}
              />
              <WordCard select={select} onInputChange={handleInputChange} />
            </Route>
            <Route path='/vi-zh/:word'>
              <SearchBar
                word={inputText}
                select={select}
                onSelectChange={handleSelectChange}
              />
              <WordCard select={select} onInputChange={handleInputChange} />
            </Route>
            <Route path='/zh-vi/:word'>
              <SearchBar
                word={inputText}
                select={select}
                onSelectChange={handleSelectChange}
              />
              <WordCard select={select} onInputChange={handleInputChange} />
            </Route>
          </Switch>
          <BackTop>
            <div style={style}>UP</div>
          </BackTop>
        </div>
      </div>
    </Router>
  );
}

export default LookupWordComponent;
