import React from 'react';
import styles from './ExperienceList.module.css';
import { Experience } from '../model/experience';

async function fetchExperiences(filter?: string): Promise<Experience[]> {
  const result = await fetch(
    `http://localhost:3001/list/experience/${filter || ''}`,
  );
  const { response } = await result.json();
  return response;
}

interface State {
  experiences: Experience[];
}

class ExperienceList extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      experiences: [],
    };
  }
  async componentDidMount() {
    const experiences = await fetchExperiences();
    this.setState({
      experiences,
    });
  }

  render() {
    return (
      <div className={styles['list-main-container']}>
        <div className={styles['list-container']}>
          {this.state.experiences.map((experience) => (
            <ExperienceCard experience={experience} />
          ))}
        </div>
      </div>
    );
  }
}

const ExperienceCard = ({
  experience: { id, name, description, organisation, location },
}: {
  experience: Experience;
}) => (
  <div className={styles['experience-card']} key={id}>
    <h5 className={styles['name']}>{name}</h5>
    <p className={styles['text']}>{description}</p>
    <p className={styles['text']}>{organisation}</p>
    <p className={styles['location']}>{location}</p>
  </div>
);

export default ExperienceList;
