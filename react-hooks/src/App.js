import { UseMemoExample, UseRefExample, UseCallbackExample } from "./hooks";
import Accordion from './components/Accordion.jsx'

const App = () => {
  return (
    <div className="container">
      <div className="text-center mt-2">
        <h2>یادگیری و استفاده از هوک های ری اکت 🚀</h2>
      </div>
      <hr className="text-danger" />
      <Accordion title="مثال هوک useRef" heading="headingOne">
        <UseRefExample />
      </Accordion>
      <hr className="text-primary" />
      <Accordion title="مثال هوک useMemo" heading="headingTwo">
        <UseMemoExample />
      </Accordion>
      <hr className="text-primary" />
      <Accordion title="مثال هوک useCallback" heading="headingTwo">
        <UseCallbackExample />
      </Accordion>
      <hr className="text-success" />
    </div>
  );
};

export default App;
