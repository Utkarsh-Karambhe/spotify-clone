# Step 1: Use a Java 17 image to BUILD the app
FROM maven:3.9.6-eclipse-temurin-17 AS build

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy pom.xml first (for dependency caching)
COPY pom.xml .

# Step 4: Download all dependencies
RUN mvn dependency:go-offline

# Step 5: Copy all source code
COPY src ./src

# Step 6: Build the JAR file (skip tests to save time)
RUN mvn clean package -DskipTests

# ---- Second stage: Run the app ----
# Step 7: Use a smaller Java image just to RUN
FROM eclipse-temurin:17-jre

WORKDIR /app

# Step 8: Copy the built JAR from the build stage
COPY --from=build /app/target/*.jar app.jar

# Step 9: Tell Docker which port this app uses
EXPOSE 8080

# Step 10: Command to run the app
ENTRYPOINT ["java", "-jar", "app.jar"]
