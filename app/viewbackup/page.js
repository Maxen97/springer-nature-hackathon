"use client";
import DicomViewer from "../components/DicomViewer/DicomViewer";

export default function Fake() {

    const styles = {
        // Phone frame styles
        phoneContainer: {
            position: 'relative',
            maxWidth: '600px',
            height: '90vh',
            margin: '20px auto',
            borderRadius: '40px',
            border: '16px solid #000',
            backgroundColor: '#000',
            boxShadow: '0 0 20px rgba(0,0,0,0.2)',
            overflow: 'hidden',
        },
        phoneSpeaker: {
            position: 'absolute',
            top: '0',
            width: '150px',
            height: '30px',
            background: '#000',
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: '2',
        },
        phoneContent: {
            width: '100%',
            height: '100%',
            backgroundColor: '#fff',
            overflow: 'auto',
            padding: "20px",
        }
    };
    return (
        <div style={styles.phoneContainer}>
            <div style={styles.phoneSpeaker}></div>
            <div style={styles.phoneContent}>
                <div>
                    <h1>Diseases of the Brain, Head and Neck, Spine</h1>
                    <h2>Diseases of the Sella Turcica and Parasellar Region</h2>
                    <p>Knowledge of the anatomy in the regions of the sella turcica, suprasellar cistern, and cavernous sinus paired with
                        clinical history and presentation is important for accurate
                        image interpretation. Focused diagnosis of lesions in
                        these regions requires identifying the anatomic location in
                        which a lesion arises, evaluation of specifc imaging fndings inherent to the lesion as well as in the surrounding
                        structures, and correlation with clinical presentation
                        (symptoms and signs).</p>
                    <img src={"brain1.png"}></img>
                    <p>These tumors arise from a variety of locations around
                        the sella including the tuberculum sellae, planum sphenoidale, clinoid processes, medial sphenoid wing, and cavernous sinus. Meningiomas are usually slow growing and
                        present because of compression on adjacent structures most
                        commonly the pre-chiasmatic optic nerves and optic chiasm
                        resulting in visual symptoms.</p>
                    <DicomViewer
                        dicomUrls={["https://raw.githubusercontent.com/ivmartel/dwv/master/tests/data/bbmri-53323851.dcm",
                            'https://raw.githubusercontent.com/ivmartel/dwv/master/tests/data/bbmri-53323707.dcm',
                            'https://raw.githubusercontent.com/ivmartel/dwv/master/tests/data/bbmri-53323563.dcm']}
                    />
                    <p>The distinction between chiasmatic and hypothalamic gliomas often depends on the predominant position of the lesion.
                        In many cases, the origin of large gliomas cannot be defnitively determined; therefore, hypothalamic and chiasmatic
                        gliomas are discussed as a single entity. The vast majority
                        (75%) of these tumors occur in the frst decade of life, with
                        equal prevalence in males and females. There is a defnite
                        association of optic nerve and chiasmatic gliomas with neurofbromatosis, more so for tumors that arise from the optic
                        nerve rather than from the chiasm or hypothalamus.</p>
                    <h2>Problem Solving Disorders of CSF</h2>
                    <p>Spontaneous intracranial hypotension (SIH) is a
                        debilitating medical condition, which is perpetuated by
                        the continuous loss of cerebrospinal fuid (CSF) at the
                        level of the spine, and is the top differential diagnosis for
                        patients presenting with orthostatic headache.
                        Neuroimaging plays a crucial role in the diagnostic
                        work-up and monitoring SIH, as it provides objective
                        data in the face of various clinical symptoms and very
                        often a normal opening pressure on lumbar puncture.
                        Brain MRI frequently demonstrates typical signs of CSF
                        depletion and includes homogenous dural enhancement,
                        venous distention, subdural collections, and brain sagging. Three types of CSF leaks may be distinguished: (1)
                        ventral dural leaks due to microspurs, (2) leaking spinal
                        nerve root cysts, (3) or direct CSF venous fstula. The
                        quest for the leak may be the fabled search for the needle
                        in the haystack, scrutinizing the entire spine for a dural
                        breach often the size of pin. The main role of spine imaging is the correct classifcation and precise localization of
                        CSF leaks. Precise localization of the CSF leak site is
                        crucial to successful treatment, which is generally a targeted percutaneous epidural patch or surgical closure
                        when conservative measures fail to provide long-term
                        relief.</p></div>
            </div>
        </div>







    );
}