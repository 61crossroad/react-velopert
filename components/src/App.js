import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";

const App = () => {
  return <MyComponent /* name="React" */ bye="Adios!" favoriteNumber={7}>Hi, dad
    <Counter />
    <Say />
    </MyComponent>;
  // return <MyComponent name={3} bye="Adios!">Javascript</MyComponent>;
  // return <MyComponent />;
};

export default App;
