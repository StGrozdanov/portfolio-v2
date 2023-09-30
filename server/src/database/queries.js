export const getFullUserInfoQuery = `SELECT email,
                                            cv_link                                       AS cvLink,
                                            about_me                                      AS aboutMe,
                                            JSON_EXTRACT(technology_stack, '$.techStack') AS techStack,
                                            JSON_EXTRACT(soft_skills, '$.softSkills')     AS softSkills,
                                            JSON_EXTRACT(hobbies, '$.hobbies')            AS hobbies,
                                            social_media                                  AS socialMedia,
                                            jobs,
                                            projects
                                    FROM users`;

export const getBaseUserInfoQuery = `SELECT email,
                                            cv_link                                       AS cvLink,
                                            about_me                                      AS aboutMe
                                     FROM users;`;

export const getUserSkillsQuery = `SELECT JSON_EXTRACT(technology_stack, '$.techStack') AS techStack,
                                          JSON_EXTRACT(soft_skills, '$.softSkills')     AS softSkills,
                                          JSON_EXTRACT(hobbies, '$.hobbies')            AS hobbies
                                   FROM users;`;

export const getUserJobsAndProjectsQuery = `SELECT jobs, projects FROM users`;

export const getUserSocialMediaQuery = `SELECT social_media AS socialMedia FROM users`;