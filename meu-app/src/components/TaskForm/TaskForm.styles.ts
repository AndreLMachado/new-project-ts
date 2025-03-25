import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 2px solid #1976d2;
  border-radius: 5px;
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  background: #1976d2;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #1565c0;
  }
`;