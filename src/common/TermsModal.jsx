import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const TermsModal = (props) => {
    const {
        showTermsModal,
        handleTermsModalClose,
        handleLogin
    } = props;

    return (
        <Modal
            size="lg"
            show={showTermsModal}
            onHide={handleTermsModalClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Terms and conditions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ overflowY: 'auto', height: '400px' }}>
                    <p>
                        NEW YORK RESIDENTS
                        New York City Department of Consumer Affairs Collection Agency License Number 2037078. **If you do not speak English and an RMS representative doesn't speak your language, please click this link  http://www.nyc.gov/dca
                        VERMONT RESIDENTS
                        We will not disclose your Consumer Information to affiliates or non-affiliated third parties except as provided above, in compliance with the requirements of Vermont law.
                        CALIFORNIA RESIDENTS
                        We will not disclose your Consumer Information to affiliates or non-affiliated third parties except as provided above, in compliance with the requirements of California law. As required by law, you are hereby notified that a negative credit report reflecting on your credit record may be submitted to a credit-reporting agency if you fail to fulfill the terms of your credit obligations.
                        The state Rosenthal Fair Debt Collection Practices Act and the federal Fair Debt Collection Practices Act require that, except under unusual circumstances, collectors may not contact you before 8 a.m. or after 9 p.m. They may not harass you by using threats of violence or arrest or by using obscene language. Collectors may not use false or misleading statements or call you at work if they know or have reason to know that you may not receive personal calls at work. For the most part, collectors may not tell another person, other than your attorney or spouse, about your debt. Collectors may contact another person to confirm your location or enforce a judgment. For more information about debt collection activities, you may contact the Federal Trade Commission at 1-877-FTC-HELP or www.ftc.gov.
                        Tal como lo establece la ley, se le notifica por este conducto que, de no cumplir usted con las obligaciones de crédito que ha contraído, podría ponerse el hecho en conocimiento de una agencia de información crediticia, lo cual se reflejaría negativamente en su expediente personal.
                        La ley estatal de California Rosenthal y la ley de Cobranza Imparical de Deudas (FDCPA) requieren que, salvo circunstancias excepcionales, cobradores no pueden hacer contacto con usted antes de las 8 de la mañana y después de las 9 de la noche. Ellos no pueden molestarle usando amenazas de violencia o de arresto o usando palabras obscenas. Los cobradores no pueden usar información falsa o engañosa o contactarle en su trabajo si ellos saben o ienen razón de saber que Ud. no puede recibir llamadas personales en el trabajo. Generalmente, los cobradores no pueden hablar con nadie, aparte de su abogado o su esposo/esposa, sobre su dueda. Los cobradores pueden hablar con otra persona para confirmar su dirección o hacer cumplir una sentencia. Para mas información sobre las actividades de cobranza, Ud. puede llamar gratis al 1-877-FTC-HELP (1-877-382-4357); o puede visitarwww.ftc.gov.
                        UTAH RESIDENTS
                        As required by Utah law, you are hereby notified that a negative credit report reflecting on your credit record may be submitted to a credit reporting agency if you fail to fulfill the terms of your credit obligations.
                        COLORADO RESIDENTS
                        FOR INFORMATION ABOUT THE COLORADO FAIR DEBT COLLECTION PRACTICES ACT, SEE WWW.COLORADOATTORNEYGENERAL.GOV/CA
                        A consumer has the right to request in writing that a debt collector or collection agency cease further communication with the consumer. A written request to cease communication will not prohibit the debt collector or collection agency from taking any other action authorized by law to collect the debt.
                        Recovery Management Solutions has a Colorado office with the following address and toll-free number: 27 N Willerup STE B, Montrose CO 81401 Phone: 970-249-7514. Toll-free 1-844-624-9483.
                        Only physical in-person payments may be accepted at this office location. All payments made via mail should be sent to the following address: P.O. Box 182, West Seneca, NY 14224
                        MINNESOTA RESIDENTS
                        This collection agency is licensed by the Minnesota Dept. of Commerce.
                        TENNESSEE RESIDENTS
                        This collection agency is licensed by the Collection Service Board of the Department of Commerce and Insurance.
                        MOBILE AND EMAIL COMMUNICATION DISCLOSURE
                        You also consent to receiving text messages from Recovery Management Solutions, LLC and its agents and independent contractors (collectively “RMS”) regarding your account to any cellular telephone number you provide to us and/or e-mails to any e-mail address you provide to us. You affirm that you are the owner of the e-mail address or addresses provided and/or the subscriber to any cellular telephone number you provide to RMS. You further affirm that any phone number or e-mail address that you provide to RMS is not a workplace e-mail address or telephone number or employer-furnished or owned cellular telephone or e-mail address. Text and data rates may apply to any text messages received from RMS.Text messaging and e-mail communication are not required to communicate with RMS. You may opt out of this consent at any time by revoking your consent in writing to RMS. [AND BY CALLING A CERTAIN NUMBER, TEXTING “STOP” TO A CERTAIN NUMBER?]You further agree that we may call you and discuss your account with you more than once in a seven-day period and that RMS may use an Automatic Telephone Dialing System (“ATDS”) to call you which may or may not include a pre-recorded message.This is a communication from a debt collector and is an attempt to collect a debt. Any information obtained will be used for that purpose
                    </p>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="danger"
                    onClick={handleTermsModalClose}
                    size="sm"
                    style={{ borderRadius: '2px' }}>
                    Decline
                </Button>
                <Button
                    variant="primary"
                    onClick={handleLogin}
                    size="sm"
                    style={{ borderRadius: '2px' }}>
                    Accept
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default TermsModal
