export const getFullUserInfoQuery = `SELECT email,
                                            cv_link                                       AS cvLink,
                                            about_me                                      AS aboutMe,
                                            partners,
                                            carousel,
                                            JSON_EXTRACT(technology_stack, '$.techStack') AS techStack,
                                            JSON_EXTRACT(soft_skills, '$.softSkills')     AS softSkills,
                                            JSON_EXTRACT(hobbies, '$.hobbies')            AS hobbies,
                                            social_media                                  AS socialMedia,
                                            jobs,
                                            projects
                                    FROM users;`;

export const getBaseUserInfoQuery = `SELECT email,
                                            cv_link                                       AS cvLink,
                                            about_me                                      AS aboutMe,
                                            partners,
                                            carousel
                                    FROM users;`;

export const getUserSkillsQuery = `SELECT JSON_EXTRACT(technology_stack, '$.techStack') AS techStack,
                                          JSON_EXTRACT(soft_skills, '$.softSkills')     AS softSkills,
                                          JSON_EXTRACT(hobbies, '$.hobbies')            AS hobbies
                                   FROM users;`;

export const getUserJobsAndProjectsQuery = `SELECT jobs, projects FROM users`;

export const getUserSocialMediaQuery = `SELECT social_media AS socialMedia FROM users`;

export const updateBaseUserInfoQuery = `UPDATE users
                                        SET about_me = :aboutMe,
                                            cv_link  = :cvLink,
                                            email    = :email,
                                            partners = JSON_SET(partners, '$', JSON_ARRAY(:partners)),
                                            carousel = :carousel
                                        WHERE users.id = :id`;

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

export const getAnalyticsForTheDateQuery = `SELECT date_time AS date,
                                                    device_type,
                                                    origin_country,
                                                    ip_address,
                                                    (SELECT origin_country
                                                    FROM analytics
                                                    WHERE DATE(date_time) = :date
                                                    GROUP BY origin_country
                                                    ORDER BY COUNT(origin_country) DESC
                                                    LIMIT 1) AS most_popular_country,
                                                    (SELECT device_type
                                                    FROM analytics
                                                    WHERE DATE(date_time) = :date
                                                    GROUP BY device_type
                                                    ORDER BY COUNT(device_type) DESC
                                                    LIMIT 1) AS most_popular_device
                                                FROM analytics
                                                WHERE DATE(date_time) = :date;`

export const getTodayVisitationsCountQuery = 'SELECT CAST(COUNT(id) AS varchar(10)) as today_visitations_count FROM analytics WHERE DATE(date_time) = :date'

export const getAnalyticsBetweenTheDatesQuery = `SELECT date_time AS date,
                                                        device_type,
                                                        origin_country,
                                                        ip_address,
                                                        (SELECT origin_country
                                                        FROM analytics
                                                        WHERE DATE(date_time) BETWEEN :startDate AND :endDate
                                                        GROUP BY origin_country
                                                        ORDER BY COUNT(origin_country) DESC
                                                        LIMIT 1) AS most_popular_country,
                                                        (SELECT device_type
                                                        FROM analytics
                                                        WHERE DATE(date_time) BETWEEN :startDate AND :endDate
                                                        GROUP BY device_type
                                                        ORDER BY COUNT(device_type) DESC
                                                        LIMIT 1) AS most_popular_device
                                                    FROM analytics
                                                    WHERE DATE(date_time) BETWEEN :startDate AND :endDate;`

export const updateCVQuery = `UPDATE users SET cv_link = :URL`;

export const getUserFromDBQuery = `SELECT id, nickname, password FROM users WHERE nickname = :username`;

export const updateUserPasswordQuery = `UPDATE users SET password = :password;`;

export const updateProjectImageQuery = `UPDATE users
                                 SET projects = JSON_REPLACE(projects, REPLACE(
                                        REPLACE(JSON_SEARCH(projects, 'one', :project_name), '"', '')
                                    , '.title'
                                    , '.imgUrl'
                                    ), :img_url)
                                 WHERE JSON_SEARCH(projects, 'one', :project_name) IS NOT NULL;`;
export const updateJobImageQuery = `UPDATE users
                                    SET jobs = JSON_REPLACE(jobs, REPLACE(
                                            REPLACE(JSON_SEARCH(jobs, 'one', :project_name), '"', '')
                                        , '.company'
                                        , '.imgUrl'
                                        ), :img_url)
                                    WHERE JSON_SEARCH(jobs, 'one', :project_name) IS NOT NULL;`;

export const uploadPartnerLogoQuery = `UPDATE users SET partners = JSON_ARRAY_APPEND(partners, '$', :img_url);`;

export const uploadCarouselQuery = `UPDATE users SET carousel = JSON_ARRAY_APPEND(carousel, '$', :img_url);`;

export const getProjectImages = `SELECT JSON_EXTRACT(projects, REPLACE(
                                                        REPLACE(JSON_SEARCH(projects, 'one', :project_name), '"', ''),
                                                        'title',
                                                        'imgUrl')
                                                    ) AS project_images
                                FROM users;`;

export const getJobsImages = `SELECT JSON_EXTRACT(jobs, REPLACE(
                                                    REPLACE(JSON_SEARCH(jobs, 'one', :company_name), '"', ''),
                                                    'company',
                                                    'imgUrl')
                                                ) AS job_images
                             FROM users;`;

export const getPartnerLogos = `SELECT partners FROM users WHERE id=1`;

export const getCarouselImages = `SELECT JSON_ARRAY_APPEND(JSON_EXTRACT(carousel, '$[*].imgURL'),
                                                            '$',
                                                            JSON_EXTRACT(carousel, '$[last]')
                                                            ) AS carousel_images
                                    FROM users
                                    WHERE id = 1;`;