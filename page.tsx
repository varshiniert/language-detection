import React from 'react';
import CodeViewer from './components/page.tsx';

const CodePage = () => {
  const pythonCode = `def greet(name):
    print("Hello, " + name)

greet("World")`;

  const javaCode = `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World");
    }
}`;

  return (
    <div className="code-page">
      <h1>Code Viewer</h1>
      <CodeViewer code={pythonCode} language="python" />
      <CodeViewer code={javaCode} language="java" />
    </div>
  );
};

export default CodePage;
