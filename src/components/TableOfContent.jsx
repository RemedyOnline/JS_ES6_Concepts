const TableOfContent = () => {
  return (
    <section className="space-y-5 text-lg">
      <ol className="list-decimal space-y-5 text-base">
        <li>
          Logical Operators...
          <ul className="list-disc ml-5">
            <li>Logical AND</li>
            <li>Logical OR</li>
          </ul>
        </li>
        <li>Templete Literals</li>
        <li>Ternary Operator</li>
        <li>Destrusturing Objects</li>
        <li>Destrusturing Arrays</li>
        <li>Default Parameters</li>
        <li>Spread Operators</li>
        <li>Rest Operators</li>
        <li>
          ES6 Array Methods...
          <ul className="list-disc ml-5">
            <li>
              <strong>map</strong>
            </li>
            <li>
              <strong>find</strong> - returns to first result it encounters
            </li>
            <li>
              <strong>filter</strong> - returns all possible results encountered
            </li>
            <li>
              <strong>some</strong> - returns a boolean as to whether at least
              one encounter true
            </li>
            <li>
              <strong>every</strong> - returns a boolean as to whether all
              encounters are true or not
            </li>
            <li>
              <strong>include</strong> - returns a boolean as to whether a
              condition is satisfied or not
            </li>
            <li>
              <strong>indexOf</strong> - returns the current index of an item.
              NB: returns &apos;-1&apos; if item does not exist.
            </li>
            <li>
              <strong>findIndex</strong> - returns the index of an item. NB:
              returns &apos;-1&apos; if item does not exist.
            </li>
          </ul>
        </li>
        <li>API Fetching and Integration</li>
        <li>Ternary Operator</li>
        <li>Class-Based Components...</li>
        <li>Functional Components...</li>
        <ul className="list-disc ml-5">
          <li>Using Function Block</li>
          <li>Using Arrow Function Block</li>
        </ul>
        <li>Nested Components</li>
        <li>
          How to pass data from one component to the other... <br />
          Thus, using Props... <br />
          Thus, props is a way to pass data from one component to another...
        </li>
        <li>How to use ternary operators for Conditional statements</li>
        <li>How to manage States</li>
        <li>Life Cycle Methods in - Class-Based Components</li>
        <ul className="list-disc ml-5">
          <li>ComponentDidMount</li>
          <li>ComponentDidUpdate</li>
          <li>ComponentWillUnmount</li>
        </ul>
        <ul className="list-disc ml-5">
          <li>Conditional Statements, using the ternary operator...</li>
          <li>Using Arrow Function Block</li>
        </ul>
        <li>Life Cycle Methods in - Functional Components</li>
        <li>State Management in a Class-Based Component</li>
        <li>Life Cycle Methods</li>
        <ul className="list-disc ml-5">
          <li>ComponentDidMount - runs for the first time when page reloads</li>
          <li>ComponentDidUpdate</li>
          <li>ComponentDidUnmount</li>
        </ul>
        <li>React Hooks</li>
        <ul className="list-disc ml-5">
          <li>
            useState - <span className="italic">for state management</span>{" "}
          </li>
          <li>
            useEffect - <span className="italic">to manage side effects</span>{" "}
          </li>
          <li>
            useContext -{" "}
            <span className="italic">for Complex State Mananagement</span>{" "}
          </li>
          <li>
            useReducer -{" "}
            <span className="italic">for Complex State Mananagement</span>{" "}
          </li>
          <li className="line-through">
            useRef - <span className="italic">for managing DOM elements</span>{" "}
          </li>
          <li className="line-through">
            useCallback -{" "}
            <span className="italic">for performance optimization</span>{" "}
          </li>
          <li className="line-through">
            useMemo -{" "}
            <span className="italic">for performance optimization</span>{" "}
          </li>
        </ul>
        <li>React Forms</li>
        <ul className="list-disc ml-5">
          <li>Event Handling</li>
          <li>Creating Forms</li>
          <li>Form Submission</li>
          <li>Dynamic Form Creation</li>
        </ul>
        <li>
          Custom Hooks - Concepts which will allow us to reuse our components
          efficienctly...
        </li>
      </ol>
      <section>
        <div className="apiFetchProducts py-4 bg-neutral-300 border border-slate-500"></div>
        <div className="recipeList py-4 bg-neutral-900"></div>
      </section>
    </section>
  );
};

export default TableOfContent;
