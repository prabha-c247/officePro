import React from "react";
import { Form, Col } from "react-bootstrap";

interface DynamicFormInputProps {
  label: string;
  type: string;
  value: string | number;
  onChange: (value: string | number) => void;
  controlId: string;
  placeholder?: string;
  options?: string[];
  defaultValue?: string;
  isTextBox?: boolean;
  
}
const DynamicFormInput: React.FC<DynamicFormInputProps> = ({
  label,
  type,
  value,
  onChange,
  controlId,
  placeholder,
  options,
  defaultValue,
  isTextBox
}) => {
  return (
    <Form.Group as={Col} controlId={controlId}>
    {options ? (
      <>
        <Form.Label>{label}</Form.Label>
        <Form.Select
          defaultValue={defaultValue || "Choose..."}
          onChange={(e) => onChange(e.target.value)}
        >
          <option>select</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Form.Select>
      </>
    ) : isTextBox ? ( 
      <>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          as="textarea"
          rows={3}
        />
      </>
    ) : (
      <>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </>
    )}
    
  </Form.Group>
  
  );
};

export default DynamicFormInput;
