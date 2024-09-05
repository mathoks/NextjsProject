SELECT
  prod_id,
  count(*) AS total_reviews,
  avg(review) AS average_rating,
  round(
    (
      (
        (
          count(*) FILTER (
            WHERE
              (review = 5)
          )
        ) :: numeric * 100.0
      ) / (count(*)) :: numeric
    ),
    2
  ) AS percentage_5,
  round(
    (
      (
        (
          count(*) FILTER (
            WHERE
              (review = 4)
          )
        ) :: numeric * 100.0
      ) / (count(*)) :: numeric
    ),
    2
  ) AS percentage_4,
  round(
    (
      (
        (
          count(*) FILTER (
            WHERE
              (review = 3)
          )
        ) :: numeric * 100.0
      ) / (count(*)) :: numeric
    ),
    2
  ) AS percentage_3,
  round(
    (
      (
        (
          count(*) FILTER (
            WHERE
              (review = 2)
          )
        ) :: numeric * 100.0
      ) / (count(*)) :: numeric
    ),
    2
  ) AS percentage_2,
  round(
    (
      (
        (
          count(*) FILTER (
            WHERE
              (review = 1)
          )
        ) :: numeric * 100.0
      ) / (count(*)) :: numeric
    ),
    2
  ) AS percentage_1
FROM
  prod_reviews
GROUP BY
  prod_id;