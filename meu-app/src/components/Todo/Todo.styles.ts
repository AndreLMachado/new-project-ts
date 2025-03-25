import styled from "styled-components";

export const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e3f2fd;
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 5px;
  border-left: 5px solid #1976d2;
`;

export const TaskText = styled.p`
  margin: 0;
  font-size: 16px;
  color: #333;
`;

export const DeleteButton = styled.button`
  background: #d32f2f;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #b71c1c;
  }
`;