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

export const updateBaseUserInfoQuery = `UPDATE users SET about_me = :aboutMe, cv_link = :cvLink, email = :email WHERE users.id = :id;`;

export const userExistsQuery = `SELECT id FROM users WHERE id = :id;`;

export const updateUserSkillsQuery = `UPDATE users
                                      SET technology_stack = JSON_SET(technology_stack, '$.techStack', JSON_ARRAY(:techStack)),
                                          soft_skills      = JSON_SET(soft_skills, '$.softSkills', JSON_ARRAY(:softSkills)),
                                          hobbies          = JSON_SET(hobbies, '$.hobbies', JSON_ARRAY(:hobbies))
                                      WHERE users.id = :id;`;

export const updateUserJobsAndProjectsQuery = `UPDATE users
                                                SET jobs     = :jobs,
                                                    projects = :projects
                                                WHERE users.id = :id;`;

export const updateUserSocials = `UPDATE users
                                    SET social_media = JSON_REPLACE(social_media, '$.facebook', :facebook),
                                        social_media = JSON_REPLACE(social_media, '$.linkedIn', :linkedIn),
                                        social_media = JSON_REPLACE(social_media, '$.github', :github),
                                        social_media = JSON_REPLACE(social_media, '$.email', :email)
                                    WHERE users.id = :id;`;

export const insertVistiationsQuery = `INSERT INTO analytics (date_time, device_type, origin_country, ip_address) VALUE (:date, :deviceType, :originCountry, :ipAddress);`;

export const getAnalyticsForTheDateQuery = `SELECT TIME(date_time) AS hour, device_type, origin_country, ip_address FROM analytics WHERE DATE(date_time) = :date;`

export const getAnalyticsBetweenTheDatesQuery = `SELECT TIME(date_time) AS hour, device_type, origin_country, ip_address FROM analytics WHERE DATE(date_time) BETWEEN :startDate AND :endDate;`

export const updateCVQuery = `UPDATE users SET cv_link = :URL`;

export const getUserFromDBQuery = `SELECT id, nickname, password FROM users WHERE nickname = :username`;

export const updateUserPasswordQuery = `UPDATE users SET password = :password;`;