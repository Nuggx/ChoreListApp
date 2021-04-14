import React from "react";
import Select from 'react-select';

const selectOptions = [
    { value: 'all', label: 'All' },
    { value: 'completed', label: 'Completed' },
    { value: 'uncompleted', label: 'Uncompleted' }
  ];

  const CustomStyle = {
    option: (base, state) => ({
      ...base,
      backgroundColor: 
      state.isFocused ? '#0fc196' : '#F6F8FF',

    }),
    menu: (base, state) => ({
        ...base,
        backgroundColor: '#F6F8FF',
        borderRadius: '0px',
        marginTop:'0px',
  
      }),
    control: (base, state) => ({
        ...base,
        backgroundColor: '#F6F8FF',
        borderRadius: '0px',
        border: '0px',
        borderBottom: '1px solid',
        borderColor: state.isHovered ? 'hsl(0, 0%, 80%)' : 'hsl(0, 0%, 80%)',
        paddingLeft: '2.5rem',
        boxShadow: null
    }),  
  }
  
const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(inputText !== "") {
            setTodos([
                ...todos,
                { text: inputText, completed: false, id: Math.random()*1000 }
            ]);
            setInputText("");
        }
    }
    const statusHandler = (e) => {
        setStatus(e.value);
    }
    let placeholder = "";
    if(todos.length === 0) {
        placeholder = "Start by adding a task..."
    } else {
        placeholder = "Add a task..."
    };
    return(
        <form>
            <div className="todo-bar">
                <input maxLength="100" onChange={inputTextHandler} value={inputText} type="text" className="todo-input" placeholder={placeholder}/>
                <button aria-label="add item" onClick={submitTodoHandler} className="todo-button">
                </button>
            </div>
            <div className="select">
                <Select
                    onChange={statusHandler}
                    placeholder="All"
                    // defaultInputValue="All"
                    options={selectOptions}
                    styles={CustomStyle}
                    isSearchable={false}
                    defaultValue={{ value: "all", label: "All" }}
                    // menuIsOpen={true}
                    theme={theme => ({
                        ...theme,
                        colors:{
                            primary50: '#0fc196',

                        }
                    })}
                />
            </div>
        </form>
    );
};

export default Form;