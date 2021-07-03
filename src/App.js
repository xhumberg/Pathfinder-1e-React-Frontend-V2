import './App.css';
import CharacterSheetComponent from './components/CharacterSheetComponent';

function App() {
  return (
    <div className="App" style={{
      backgroundImage: 'url("https://scontent-lax3-1.xx.fbcdn.net/v/t1.15752-9/202095020_322692522840185_2140707559428348378_n.png?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=JULP3aQAHQIAX8Wjkuk&tn=GbwpLf3bl2cMi2rg&_nc_ht=scontent-lax3-1.xx&oh=b25e7775cbdd7b53e2dd804f2b6236b8&oe=60E44696")'
    }}>
      <CharacterSheetComponent />
    </div>
  );
}

export default App;
