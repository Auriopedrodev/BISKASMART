import React, { useState } from 'react';
import Navbar from '../Navbar';


const Candidatura = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    position: '',
    phoneEmail: '',
    address: '',
    projectTitle: '',
    projectDescription: '',
    projectPlan: '',
    methodology: '',
    resources: '',
    paymentTerms: '',
    scheduleStartDate: '', // Data de Início Proposta
    scheduleEndDate: '', // Data de Conclusão
    milestones: '' // Marcos e Prazos Intermediários
  });

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
    <Navbar/>
   
    <div className="max-w-lg mx-auto mt-10 p-4 border border-gray-300 rounded">
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div>
            <h2 className="text-[#ffa900] text-xl font-bold mb-4">Informações do Candidato</h2>
            <div className="p-4 flex flex-wrap">
              <div className="w-full md:w-1/2 p-2">
                <label className="block mb-2">Nome Completo</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="w-full md:w-1/2 p-2">
                <label className="block mb-2">Nome da Empresa</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="w-full md:w-1/2 p-2">
                <label className="block mb-2">Cargo/Função</label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="w-full md:w-1/2 p-2">
                <label className="block mb-2">Telefone e Email</label>
                <input
                  type="text"
                  value={formData.phoneEmail}
                  onChange={(e) => setFormData({ ...formData, phoneEmail: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="w-full p-2">
                <label className="block mb-2">Endereço</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h2 className="text-[#ffa900] text-xl font-bold mb-4">Detalhes do Projeto</h2>
            <div className="p-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 p-2">
                  <label className="block mb-2">Título do Projeto</label>
                  <input
                    type="text"
                    value={formData.projectTitle}
                    onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="w-full md:w-1/2 p-2">
                  <label className="block mb-2">Descrição Detalhada</label>
                  <textarea
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="4"
                  />
                </div>
                <div className="w-full md:w-1/2 p-2">
                  <label className="block mb-2">Plano de Realização</label>
                  <textarea
                    value={formData.projectPlan}
                    onChange={(e) => setFormData({ ...formData, projectPlan: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="4"
                  />
                </div>
                <div className="w-full md:w-1/2 p-2">
                  <label className="text-[#ffa900]block mb-2">Metodologia/Abordagem</label>
                  <textarea
                    value={formData.methodology}
                    onChange={(e) => setFormData({ ...formData, methodology: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="4"
                  />
                </div>
                <div className="w-full p-2">
                  <label className="block mb-2">Recursos e Ferramentas</label>
                  <textarea
                    value={formData.resources}
                    onChange={(e) => setFormData({ ...formData, resources: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="4"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h2 className="text-[#ffa900] text-xl font-bold mb-4">Orçamento e Custos</h2>
            <div className="p-4 flex flex-wrap">
              <div className="w-full p-2">
                <label className="block mb-2">Estimativa de Custos</label>
                <textarea
                  value={formData.costEstimate}
                  onChange={(e) => setFormData({ ...formData, costEstimate: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="4"
                />
              </div>
              <div className="w-full p-2">
                <label className="block mb-2">Termos de Pagamento</label>
                <textarea
                  value={formData.paymentTerms}
                  onChange={(e) => setFormData({ ...formData, paymentTerms: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="4"
                />
              </div>
            </div>
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <h2 className="text-[#ffa900] text-xl font-bold mb-4">Cronograma</h2>
            <div className="p-4 flex flex-wrap">
              <div className="w-full p-2">
                <label className="block mb-2">Data de Início Proposta</label>
                <input
                  type="date"
                  value={formData.scheduleStartDate}
                  onChange={(e) => setFormData({ ...formData, scheduleStartDate: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="w-full p-2">
                <label className="block mb-2">Data de Conclusão</label>
                <input
                  type="date"
                  value={formData.scheduleEndDate}
                  onChange={(e) => setFormData({ ...formData, scheduleEndDate: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="w-full p-2">
                <label className="block mb-2">Marcos e Prazos Intermediários</label>
                <textarea
                  value={formData.milestones}
                  onChange={(e) => setFormData({ ...formData, milestones: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="4"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-4">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="px-4 py-2 bg-[#ffa900] rounded"
            >
              Anterior
            </button>
          )}
          {currentStep < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 bg-[#ffa900] text-white rounded"
            >
              Próximo
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded"
            >
              Enviar
            </button>
          )}
        </div>
      </form>
    </div>
    </>
  );
};

export default Candidatura;

