CREATE TABLE verb
(
    pk_verb INT IDENTITY(1,1) PRIMARY KEY,
    verb_name VARCHAR(55) UNIQUE,
    DATE_CREATION DATETIME2 NOT NULL DEFAULT(GETDATE()),
    DATE_MODIFICATION DATETIME2 NOT NULL DEFAULT(GETDATE())
);

INSERT INTO verb (verb_name) VALUES ('GET'),('POST'),('PUT'),('PATCH'),('DELETE'),('HEAD'),('OPTION')

CREATE TABLE app_name
(
    pk_app_name INT IDENTITY(1,1) PRIMARY KEY,
    app_name VARCHAR(55) UNIQUE,
    DATE_CREATION DATETIME2 NOT NULL DEFAULT(GETDATE()),
    DATE_MODIFICATION DATETIME2 NOT NULL DEFAULT(GETDATE())
);


CREATE TABLE host
(
    pk_host INT IDENTITY(1,1) PRIMARY KEY,
    host_name VARCHAR(55) UNIQUE,
    DATE_CREATION DATETIME2 NOT NULL DEFAULT(GETDATE()),
    DATE_MODIFICATION DATETIME2 NOT NULL DEFAULT(GETDATE())
);


CREATE TABLE status
(
    pk_status INT IDENTITY(1,1) PRIMARY KEY,
    status_value INT UNIQUE,
    DATE_CREATION DATETIME2 NOT NULL DEFAULT(GETDATE()),
    DATE_MODIFICATION DATETIME2 NOT NULL DEFAULT(GETDATE())
);

CREATE TABLE request
(
    pk_request BIGINT IDENTITY(1,1) PRIMARY KEY,
    uuid UniqueIdentifier,
    timestamp_call DATETIME2,
    path VARCHAR(2000),
    query_string VARCHAR(2000),
    fk_verb INT FOREIGN KEY REFERENCES verb(pk_verb),
    fk_host INT FOREIGN KEY REFERENCES host(pk_host),
    fk_app_name INT FOREIGN KEY REFERENCES app_name(pk_app_name),
    DATE_CREATION DATETIME2 NOT NULL DEFAULT(GETDATE()),
    DATE_MODIFICATION DATETIME2 NOT NULL DEFAULT(GETDATE())
);
CREATE INDEX idx_request_uuid ON request (uuid);

CREATE TABLE request_headers
(
    pk_request_headers BIGINT IDENTITY(1,1) PRIMARY KEY,
    headers NVARCHAR(4000),
    fk_request BIGINT FOREIGN KEY REFERENCES request(pk_request),
    DATE_CREATION DATETIME2 NOT NULL DEFAULT(GETDATE()),
    DATE_MODIFICATION DATETIME2 NOT NULL DEFAULT(GETDATE())
);

CREATE TABLE body_request
(
    pk_body_request BIGINT IDENTITY(1,1) PRIMARY KEY,
    body NVARCHAR(MAX),
    body_part NVARCHAR(MAX),
    fk_request BIGINT FOREIGN KEY REFERENCES request(pk_request),
    DATE_CREATION DATETIME2 NOT NULL DEFAULT(GETDATE()),
    DATE_MODIFICATION DATETIME2 NOT NULL DEFAULT(GETDATE())
);

CREATE TABLE response
(
    pk_response BIGINT IDENTITY(1,1) PRIMARY KEY,
    timestamp_call DATETIME2,
    response_headers NVARCHAR(4000),
    fk_request BIGINT FOREIGN KEY REFERENCES request(pk_request),
    fk_status INT FOREIGN KEY REFERENCES status(pk_status),
    DATE_CREATION DATETIME2 NOT NULL DEFAULT(GETDATE()),
    DATE_MODIFICATION DATETIME2 NOT NULL DEFAULT(GETDATE())
);


CREATE TABLE body_response
(
    pk_body_response BIGINT IDENTITY(1,1) PRIMARY KEY,
    body NVARCHAR(MAX),
    fk_response BIGINT FOREIGN KEY REFERENCES response(pk_response),
    DATE_CREATION DATETIME2 NOT NULL DEFAULT(GETDATE()),
    DATE_MODIFICATION DATETIME2 NOT NULL DEFAULT(GETDATE())
);


