FROM golang:1.16-buster AS build

WORKDIR /app/go

COPY main.go .
COPY go.mod .


RUN CGO_ENABLED=0 GOOS=linux go build -a -o fullcycle .

FROM scratch



COPY --from=build /app/go/fullcycle .

ENTRYPOINT [ "./fullcycle" ]