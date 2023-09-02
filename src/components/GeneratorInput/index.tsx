import React, { useState } from 'react';
import { ContainerInput } from './styles';

interface InputData {
  name: string;
  key: string;
}

interface InputGeneratorProps {
  inputCountsPerRow: number[]; // An array that defines how many inputs in each row
  inputNames: string[]; // Array of names for input fields
  customButtonsRow: number; // The row index where custom buttons should be rendered
  customButtons: React.ReactElement; // Custom buttons element
}

const InputGenerator: React.FC<InputGeneratorProps> = ({
  inputCountsPerRow,
  inputNames,
  customButtonsRow,
  customButtons,
}) => {
  const [inputsData, setInputsData] = useState<InputData[]>(() => {
    const initialData: InputData[] = inputNames.map((name, index) => ({
      name: '',
      key: `input_${index}`,
    }));

    return initialData;
  });

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputsData = [...inputsData];
    newInputsData[index] = {
      ...newInputsData[index],
      name: event.target.value,
    };
    setInputsData(newInputsData);
  };

  let currentIndex = 0;

  return (
    <ContainerInput>
      <div>
        {inputCountsPerRow.map((rowCount, rowIndex) => (
          <div key={`row_${rowIndex}`}>
            {Array.from({ length: rowCount }).map(() => {
              const index = currentIndex;
              currentIndex++;
              return (
                <div key={`input_${index}`} style={{ display: 'inline-block', marginRight: '10px' }}>
                  <label htmlFor={`input_${index}`}>{inputNames[index]}</label>
                  <input
                    type="text"
                    id={`input_${index}`}
                    value={inputsData[index].name}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </div>
              );
            })}
            {rowIndex === customButtonsRow && (
              <div key="custom_buttons" style={{ display: 'inline-block', marginRight: '10px' }}>
                {customButtons}
              </div>
            )}
          </div>
        ))}
      </div>
    </ContainerInput>
  );
};

export default InputGenerator;
