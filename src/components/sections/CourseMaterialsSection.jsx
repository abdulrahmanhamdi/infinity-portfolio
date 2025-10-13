// src/components/sections/CourseMaterialsSection.jsx
import FadeInWhenVisible from '../ui/FadeInWhenVisible';
import MaterialItem from '../ui/MaterialItem';

export default function CourseMaterialsSection({ materials }) {
  return (
    <section className="course-materials-section">
      <div className="container">
        <FadeInWhenVisible>
          <h2 className="section-title text-center">Course <span>Materials & Resources</span></h2>
        </FadeInWhenVisible>

        {materials.midtermsFinals && materials.midtermsFinals.length > 0 && (
          <FadeInWhenVisible>
            <article id="midterms-finals" className="material-card">
              <h3 className="material-title">Midterm and Final PDFs</h3>
              <ul className="resource-list">
                {materials.midtermsFinals.map((item, index) => (
                  <MaterialItem key={index} item={item} />
                ))}
              </ul>
            </article>
          </FadeInWhenVisible>
        )}

        {materials.quizzes && materials.quizzes.length > 0 && (
          <FadeInWhenVisible>
            <article id="quizzes" className="material-card">
              <h3 className="material-title">Quiz PDFs</h3>
              <ul className="resource-list">
                {materials.quizzes.map((item, index) => (
                  <MaterialItem key={index} item={item} />
                ))}
              </ul>
            </article>
          </FadeInWhenVisible>
        )}

        {materials.lectureVideos && materials.lectureVideos.length > 0 && (
          <FadeInWhenVisible>
            <article id="lecture-videos" className="material-card">
              <h3 className="material-title">Lecture Videos</h3>
              <ul className="resource-list">
                {materials.lectureVideos.map((item, index) => (
                  <MaterialItem key={index} item={item} />
                ))}
              </ul>
            </article>
          </FadeInWhenVisible>
        )}

        {materials.lectureNotes && materials.lectureNotes.length > 0 && (
          <FadeInWhenVisible>
            <article id="lecture-notes" className="material-card">
              <h3 className="material-title">Lecture Notes</h3>
              <ul className="resource-list">
                {materials.lectureNotes.map((item, index) => (
                  <MaterialItem key={index} item={item} />
                ))}
              </ul>
            </article>
          </FadeInWhenVisible>
        )}
      </div>
    </section>
  );
}