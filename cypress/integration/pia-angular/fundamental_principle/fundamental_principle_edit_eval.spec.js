describe("Principes fondamentaux", () => {
  /**
   * initialization
   */
  before(() => {
    // Clear datas
    cy.init();
  });

  beforeEach(() => {
    // Skip tutorial
    cy.disable_onboarding();
  });

  context("prepare data", () => {
    it("prepare pia for test", () => {
      cy.create_new_pia().then(() => {
        cy.get_current_pia_id(id => {
          cy.go_edited_pia(id, 2, 1);
        });
      });
    });
  });

  context("Proportionnalité et nécessité", () => {
    /**
     * Complete textareas
     */
    it("create pia and should complete textareas", () => {
      cy.test_writing_on_textarea();
    });

    /**
     * Validate datas
     */
    it("should valid evaluation", () => {
      cy.validateEval();
    });

    /**
     * Close Popup
     */
    it("should valid modal for evaluation", () => {
      cy.validateModal();
    });
  });

  context("Mesures protectrices des droits", () => {
    /**
     * Complete textareas
     */
    it("should complete textareas", () => {
      cy.test_writing_on_textarea();
    });

    /**
     * Validate datas
     */
    it("should valid evaluation", () => {
      cy.validateEval();
    });

    /**
     * Close Popup
     */
    it("should valid modal for evaluation", () => {
      cy.validateModal();
    });
  });
});
