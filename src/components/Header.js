import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

    return (
        <div>
            <header className="header">
                <h1>{title}</h1>
                <Button color={!showAdd ? 'green' : 'red'} text={!showAdd ? 'Add' : 'Close'} onClick={onAdd} ></Button>
            </header>        
        </div>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}


export default Header
