import InputGenerator from "../GeneratorInput";

export const FormPhone: React.FC = () => {
    const CustomButtons = () => {
        return (
          <div>
            <button>Button 1</button>
            <button>Button 2</button>
          </div>
        );
      };
      const inputCountsPerRow = [3, 2, 3]; // Define o número de inputs em cada linha
      const inputNames = ['Input 1', 'Input 2', 'Input 3', 'Input 4', 'Input 5', 'Input 6', 'Input 7', 'Input 8'];
      
  return (
    <>
     <div>
      <InputGenerator
        inputCountsPerRow={inputCountsPerRow}
        inputNames={inputNames}
        customButtonsRow={1} // Define a linha onde os botões devem ser renderizados
        customButtons={<CustomButtons />} // Passa os botões como um componente
      />
    </div>
    </>
  );
};
export default FormPhone;
