# Use an official Maven runtime as a parent image
FROM maven:3.8.4-openjdk-11-slim AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the project's pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the entire project source code
COPY src ./src

# Build the Java application
RUN mvn package

# Use a lightweight Alpine image for the final runtime image
FROM adoptopenjdk:11-jre-hotspot

# Set the working directory inside the container
WORKDIR /app

# Copy the built JAR file from the build stage to the runtime image
COPY --from=build /app/target/blank-maven-project-1.0-SNAPSHOT.jar ./app.jar

# Define the command to run your Java application
CMD ["java", "-jar", "app.jar"]
