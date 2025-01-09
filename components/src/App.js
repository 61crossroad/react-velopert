import MyComponent from "./MyComponent";
import Counter from "./Counter";

const App = () => {
  return <MyComponent /* name="React" */ bye="Adios!" favoriteNumber={7}>Hi, dad
    <Counter />
    </MyComponent>;
  // return <MyComponent name={3} bye="Adios!">Javascript</MyComponent>;
  // return <MyComponent />;
};

export default App;
